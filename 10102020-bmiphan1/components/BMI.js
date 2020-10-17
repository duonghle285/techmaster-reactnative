import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Modal from 'react-native-modal';
import { AntDesign } from "@expo/vector-icons";

export default function BMI() {
  const [gender, setGender] = useState("gender-male");
  const [height, setHeight] = useState("100");
  const [weight, setWeight] = useState("50");
  const [age, setAge] = useState("20");
  let BMI = 0;
  const [isModalVisible, setModalVisible] = useState(false);

  const changeMale = () => {
    setGender("gender-male");
  };

  const changeFemale = () => {
    setGender("gender-female");
  };

  const changeHeight = () => {
    setHeight(parseFloat(height))
  };

  const lessWeight = () => setWeight(parseFloat(weight) - 1);
  const moreWeight = () => setWeight(parseFloat(weight) + 1);

  const lessAge = () => setAge(parseFloat(age) - 1);
  const moreAge = () => setAge(parseFloat(age) + 1);

  const calculateBMI = (BMI, height, weight) => {
    return BMI = weight / ((height / 100) ** 2)
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.appname}>BMI CALCULATOR</Text>
      <View style={styles.bigarea}>
        <TouchableHighlight underlayColor={"gray"} activeOpacity={0.9} onPress={changeMale} style={styles.smallarea}>
          <View style={{ alignItems: "center" }}>
            <Foundation name="male-symbol" size={100} color="white" />
            <Text style={styles.whitetext}>MALE</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={"gray"} activeOpacity={0.9} onPress={changeFemale} style={styles.smallarea}>
          <View style={{ alignItems: "center" }}>
            <Foundation name="female-symbol" size={100} color="white" />
            <Text style={styles.whitetext}>FEMALE</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.height}>
        <Text style={styles.whitetext}>HEIGHT</Text>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
          <Text style={[styles.whitetext, { fontSize: 40, fontWeight: "bold" }]}>{height}</Text>
          <Text style={[styles.whitetext, { fontSize: 20, fontWeight: "bold" }]}>cm</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={200}
          step={1}
          value={100}
          onValueChange={changeHeight}
          thumbTintColor="#ECFB00"
          minimumTrackTintColor="#D51288"
          style={styles.slider}
        ></Slider>
      </View>
      <View style={styles.bigarea}>
        <View style={[styles.smallarea, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text style={styles.whitetext}>WEIGHT</Text>
          <Text style={[styles.whitetext, {fontSize: 30}]}>{weight}</Text>
          <View style={styles.button}>
            <TouchableHighlight underlayColor={"gray"} activeOpacity={0.5} onPress={lessWeight} style={styles.roundborder}>
              <View>
                <AntDesign name="minuscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={"gray"} activeOpacity={0.5} onPress={moreWeight} style={styles.roundborder}>
              <View>
                <AntDesign name="pluscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.smallarea, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text style={styles.whitetext}>AGE</Text>
          <Text style={[styles.whitetext, {fontSize: 30}]}>{age}</Text>
          <View style={styles.button}>
            <TouchableHighlight underlayColor={"gray"} activeOpacity={0.5} onPress={lessAge} style={styles.roundborder}>
              <View>
                <AntDesign name="minuscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={"gray"} activeOpacity={0.5} onPress={moreAge} style={styles.roundborder}>
              <View>
                <AntDesign name="pluscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableHighlight underlayColor={"#FF68DC"} activeOpacity={0.5} onPress={() => {calculateBMI; toggleModal}} style={styles.calcbutton}>
        <View>
          <Text
            style={[styles.whitetext, { fontSize: 20, fontWeight: "bold" }]}
          >
            CALCULATE
          </Text>
        </View>
      </TouchableHighlight>
      <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            <Text style={[styles.whitetext, {fontSize: 30}]}>Chỉ số BMI của bạn là {BMI}</Text>
            <Button title="Tính lại" onPress={toggleModal} />
          </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#100668",
  },
  appname: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 15,
  },
  bigarea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 10,
    marginBottom: 10,
  },
  smallarea: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "48%",
    backgroundColor: "#574BC3",
    borderRadius: 10,
  },
  whitetext: {
    color: "white",
    fontSize: 15,
  },
  height: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#574BC3",
    borderRadius: 10,
  },
  slider: {
    width: "90%",
  },
  button: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  roundborder: {
    borderRadius: 50
  },
  calcbutton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#D51288",
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "gray"
  }
});
