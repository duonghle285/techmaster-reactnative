import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function RockPaperScissors() {
  const hands = ["hand-rock", "hand-paper", "hand-scissors"];

  const [hand, setHand] = useState("hand-rock");
  const [comhand, setComhand] = useState("hand-paper");
  const [result, setResult] = useState("WIN");

  const changeRock = () => {
    const aihand = hands[Math.floor(Math.random() * hands.length)];

    if (aihand == "hand-rock") {
      setResult("DRAW");
    }
    if (aihand == "hand-paper") {
      setResult("LOSE");
    }
    if (aihand == "hand-scissors") {
      setResult("WIN");
    }

    setHand("hand-rock");
    setComhand(aihand);
  };
  const changePaper = () => {
    const aihand = hands[Math.floor(Math.random() * hands.length)];

    if (aihand == "hand-rock") {
      setResult("WIN");
    }
    if (aihand == "hand-paper") {
      setResult("DRAW");
    }
    if (aihand == "hand-scissors") {
      setResult("LOSE");
    }

    setHand("hand-paper");
    setComhand(aihand);
  };
  const changeScissors = () => {
    const aihand = hands[Math.floor(Math.random() * hands.length)];

    if (aihand == "hand-rock") {
      setResult("LOSE");
    }
    if (aihand == "hand-paper") {
      setResult("WIN");
    }
    if (aihand == "hand-scissors") {
      setResult("DRAW");
    }

    setHand("hand-scissors");
    setComhand(aihand);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.result}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>{result}</Text>
      </View>

      <View style={styles.picks}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <FontAwesome5
            name={hand}
            size={50}
            color="blue"
            style={hand == "hand-scissors" ? { transform: [{ rotateY: "180deg" }] } : { transform: [{ rotate: "90deg" }] }}
          />
          <Text style={styles.names}>You</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <FontAwesome5 name={comhand} size={50} color="blue" style={comhand == "hand-rock" || comhand == "hand-paper" ? { transform: [{ rotateY: "180deg" }, { rotate: "90deg" }] } : null} />
          <Text style={styles.names}>Computer</Text>
        </View>
      </View>

      <View style={styles.hands}>
        <TouchableHighlight onPress={changeRock} underlayColor={"white"} activeOpacity={0.5}>
          <View style={styles.buttons}>
            <FontAwesome5 name="hand-rock" size={50} color="black" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={changePaper} underlayColor={"white"} activeOpacity={0.5}>
          <View style={styles.buttons}>
            <FontAwesome5 name="hand-paper" size={50} color="black" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={changeScissors} underlayColor={"white"} activeOpacity={0.5}>
          <View style={styles.buttons}>
            <FontAwesome5 name="hand-scissors" size={50} color="black" />
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  picks: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  hands: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  names: {
    fontSize: 20,
    marginTop: 20,
  },
  buttons: {
    backgroundColor: "#F3C700",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
