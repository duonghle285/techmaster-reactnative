import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';

export default function Momo() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Xin chào!</Text>
      <Text style={[styles.text, {marginTop: 20}]}>LE HOANG DUONG</Text>
      <Text style={[styles.text, {marginTop: 10}]}>0123456789</Text>
      <View style={{marginTop: 40, justifyContent: "center"}}>
        <AntDesign style={styles.lockicon} name="lock" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Nhập mật khẩu" secureTextEntry={true} />
      </View>
      <View style={{marginTop: 20, }}>
        <TouchableHighlight style={styles.button} underlayColor="black" activeOpacity={0.2}>
          <View style={{height: 60, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white", fontSize: 20}}>Đăng nhập</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{marginTop: 30, width: 350, flexDirection: "row", justifyContent:"space-between"}}>
        <Text style={{color: "white", fontSize: 15}}>QUÊN MẬT KHẨU</Text>
        <Text style={{color: "white", fontSize: 15}}>THOÁT TÀI KHOẢN</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#CB0090",
  },
  title: {
    color: "white",
    fontSize: 22,
    paddingTop: 80,
    fontWeight: "bold"
  },
  text: {
    color: "white",
    fontSize: 18
  },
  input: {
    backgroundColor: "white",
    width: 350,
    height: 60,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 50
  },
  lockicon: {
    position: "absolute",
    zIndex: 2,
    left: 20
  },
  button: {
    backgroundColor: "black",
    width: 350,
    height: 60,
    borderRadius: 50,
    opacity: 0.4
  }
});
