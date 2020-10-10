import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import IGUpload from "../assets/Instagram/upload.png";
import IGLogo from "../assets/Instagram/logo.png";
import IGMessage from "../assets/Instagram/message.png";
import Article from "./Instagram/Article";

export default function Instagram() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={IGUpload} style={[styles.headerImage, {width: 50, height: 30}]}/>
        <Image source={IGLogo} style={[styles.headerImage, {width: 150, height: 40}]}/>
        <Image source={IGMessage} style={[styles.headerImage, {width: 50, height: 30}]}/>
      </View>

      <Article />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerImage: {
    resizeMode: "contain"
  }
})
