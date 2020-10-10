import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, View, Switch, Image, StyleSheet } from "react-native";
import BulbOff from "../assets/bulb-off.jpg";
import BulbOn from "../assets/bulb-on.jpg";

export default function TheLight() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Image source={isEnabled ? BulbOn : BulbOff} style={styles.bulb} />
      <View style={styles.lightswitch}>
          <Switch 
          trackColor={{ false: "#767577", true: "white" }}
          thumbColor={isEnabled ? "#00FF06" : "#f4f3f4"}
          onValueChange={toggleSwitch} value={isEnabled}
          style={{transform: [{ scaleX: 2 }, { scaleY: 2 }]}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  bulb: {
    top: -30,
    resizeMode: "contain",
    width: "100%",
  },
  lightswitch: {
      bottom: 50,
      position: "absolute",
      zIndex: 2
  }
});
