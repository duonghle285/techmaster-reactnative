import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import Story from "./Story";
import ThreeDots from "../../assets/Instagram/threedots.png";
import Like from "../../assets/Instagram/heart.png";
import Comment from "../../assets/Instagram/comment.png";
import Message from "../../assets/Instagram/message.png";
import Bookmark from "../../assets/Instagram/bookmark.png";

export default function Article() {
  const articles = [
    {
      id: 1,
      avatar: require("../../assets/Instagram/Avatar/4.jpg"),
      name: "Lola",
      image: require("../../assets/Instagram/Content/1.jpg"),
      views: 312124,
      time: 4
    },
    {
      id: 2,
      avatar: require("../../assets/Instagram/Avatar/3.jpg"),
      name: "Kate",
      image: require("../../assets/Instagram/Content/2.jpg"),
      views: 836980,
      time: 8
    },
    {
      id: 3,
      avatar: require("../../assets/Instagram/Avatar/2.jpg"),
      name: "Lily",
      image: require("../../assets/Instagram/Content/3.jpg"),
      views: 240179,
      time: 10
    },
    {
      id: 4,
      avatar: require("../../assets/Instagram/Avatar/1.jpg"),
      name: "Alex",
      image: require("../../assets/Instagram/Content/4.jpg"),
      views: 865230,
      time: 12
    }
  ]

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Story />
      </View>

      {articles.map((article) => (
        <View style={{width: "100%"}}>
          <View style={styles.header}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Image key={article.id} source={article.avatar} style={styles.avatar} />
              <Text key={article.id} style={{fontWeight: "bold"}}>{article.name}</Text>
            </View>
            <Image source={ThreeDots} style={{resizeMode: "contain", width: 20, marginRight: 20}} />
          </View>
          <Image key={article.id} source={article.image} style={styles.image} />
          <View style={styles.buttonbar}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Image source={Like} style={[styles.button, {width: 30, height: 30, marginRight: 5}]} />
              <Image source={Comment} style={[styles.button, {width: 40, height: 40, marginRight: 5}]} />
              <Image source={Message} style={[styles.button, {width: 35, height: 35}]} />
            </View>
            <Image source={Bookmark} style={[styles.button, {width: 25, height: 25}]} />
          </View>
          <Text key={article.id} style={{marginLeft: 15, marginBottom: 4, fontSize: 16, fontWeight: "bold"}}>{article.views} lượt xem</Text>
          <Text key={article.id} style={{marginLeft: 15, marginBottom: 10, fontSize: 14}}>{article.time} giờ trước</Text>
        </View>
      ))}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60
  },
  avatar: {
    height: 40, 
    width: 40,
    marginLeft: 20,
    marginRight: 15, 
    borderRadius: 40
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: undefined,
    aspectRatio: 1/1
  },
  buttonbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    resizeMode: "contain"
  }
})
