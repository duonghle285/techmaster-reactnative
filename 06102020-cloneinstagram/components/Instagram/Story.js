import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Story() {
  const stories = [
    {
      id: 1,
      avatar: require("../../assets/Instagram/Avatar/1.jpg"),
      name: "Alex"
    },
    {
      id: 2,
      avatar: require("../../assets/Instagram/Avatar/2.jpg"),
      name: "Lily"
    },
    {
      id: 3,
      avatar: require("../../assets/Instagram/Avatar/3.jpg"),
      name: "Kate"
    },
    {
      id: 4,
      avatar: require("../../assets/Instagram/Avatar/4.jpg"),
      name: "Lola"
    },
    {
      id: 5,
      avatar: require("../../assets/Instagram/Avatar/5.jpg"),
      name: "Emily"
    }
  ];

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {stories.map((story) => (
        <View style={{justifyContent: "center"}}>
          <Image key={story.id} style={styles.avatar} source={story.avatar} />
          <Text key={story.id} style={{textAlign: "center"}}>{story.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: "row",
    backgroundColor: "#ECECEC",
    borderColor: "gray",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  avatar: {
    margin: 10, 
    marginBottom: 5, 
    height: 70, 
    width: 70, 
    borderRadius: 70, 
    borderWidth: 2, 
    borderColor: "#F23C02"
  }
});
