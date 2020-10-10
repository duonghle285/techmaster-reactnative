import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableHighlight } from "react-native";
import FacebookBanner from "../assets/fb_banner.jpg";

export default function Facebook() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image source={FacebookBanner} style={styles.banner}/>
      <View style={styles.formbox}>
        <TextInput style={styles.input} placeholder="Số điện thoại hoặc email" />
        <TextInput style={styles.password} placeholder="Mật khẩu" secureTextEntry={true} />
      </View>
      <TouchableHighlight onPress={onPress} underlayColor={"black"} activeOpacity={0.5}>
        <View style={styles.loginbutton}>
          <Text style={{fontSize: 15, color: "white"}}>Đăng nhập</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.smalltexts}>
        <Text style={{fontSize: 15, color: "#005FFF"}}>Quên mật khẩu?</Text>
        <Text style={{fontSize: 15, color: "#005FFF"}}>Quay lại</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.orbox}>
        <Text style={{fontSize: 13}}>HOẶC</Text>
      </View>
      <TouchableHighlight>
        <View style={styles.newaccbutton}>
          <Text style={{fontSize: 15, color: "#005FFF"}}>Tạo tài khoản mới</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  banner: {
    top: -110,
    width: "100%",
    resizeMode: "contain"
  },
  formbox: {
    top: -190
  },
  input: {
        borderWidth: 1,
        borderColor: "gray",
        width: 350,
        height: 50,
        fontSize: 15,
        paddingLeft: 20
  },
  password: {
    borderWidth: 1,
    borderColor: "gray",
    borderTopWidth: 0,
    width: 350,
    height: 50,
    fontSize: 15,
    paddingLeft: 20
  },
  loginbutton: {
    width: 350,
    height: 40,
    top: -170,
    backgroundColor: "#0072FF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  smalltexts: {
    top: -150,
    height: 55,
    justifyContent: "space-between",
    alignItems: "center"
  },
  line: {
    bottom: 60,
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  orbox: {
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
    width: 50,
    height: 20,
    bottom: 78,
    backgroundColor: "white"
  },
  newaccbutton: {
    width: 350,
    height: 40,
    bottom: 25,
    backgroundColor: "#DDECFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})