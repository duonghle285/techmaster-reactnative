import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, FlatList, TouchableHighlight, Linking, ActivityIndicator } from "react-native";
import Logo from "../assets/News/logo.png";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PAGE_SIZE = 10;
const API_KEY = "4ddebcd714784f54a3c164fa7c1d3408";

export default function News() {
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
        setLoading(true);

        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&page=${page}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        const newArticles = articles.concat(jsonData.articles);

        setArticles(newArticles);
        
        setPage(jsonData.articles.length == PAGE_SIZE ? page + 1 : page);

        setLoading(false);
    };
    
    useEffect(() => {
        fetchData()
    }, []
    );

    const renderItem = ({item}) => {
        return (
            <TouchableHighlight underlayColor={"#F5F5F5"} activeOpacity={0.5} onPress={() => Linking.openURL(item.url)}>
                <View style={styles.segment}>
                    <View style={styles.imgside}>
                        <Image source={{uri: item.urlToImage}} style={styles.articleimg} />
                    </View>
                    <View style={styles.textside}>
                        <Text style={styles.articletitle}>{item.title}</Text>
                        <Text>{formatDistanceToNow(new Date(item.publishedAt))} ago</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            <StatusBar barStyle={"dark-content"} backgroundColor={"#f7f7f7"} />
            <View style={styles.header}>
                <Image source={Logo} style={styles.headerimg} />
            </View>
            <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item.url} onEndReached={fetchData} onEndReachedThreshold={0.5} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7"
    },
    loading: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        opacity: 0.3,
        position: "absolute",
        zIndex: 2
    },
    header: {
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    headerimg: {
        resizeMode: "contain",
        width: 150
    },
    segment: {
        flexDirection: "row",
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: "orange"
    },
    imgside: {
        flex: 4,
        justifyContent: "center",
        marginRight: 10
    },
    textside: {
        flex: 6,
        paddingTop: 15,
        paddingBottom: 15
    },
    articleimg: {
        height: 150,
        width: undefined,
        resizeMode: "contain"
    },
    articletitle: {
        fontWeight: "bold",
        fontSize: 17
    }
})