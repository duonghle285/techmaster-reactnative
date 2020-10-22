import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HIGHLIGHT_COLOR = '#22263c';
const GENDER = {
  MALE: 'gender_male',
  FEMALE: 'gender_female',
};
const DEFAULT_HEIGHT = 100;
const DEFAULT_WEIGHT = 190;
const DEFAULT_AGE = 20;
const DEFAULT_BMI = 0;

export default function BMI() {
  const [gender, setGender] = useState(GENDER.MALE);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const [age, setAge] = useState(DEFAULT_AGE);
  const [timer, setTimer] = useState(null);
  const [result, setResult] = useState(DEFAULT_BMI);
  const [isModalVisible, setModalVisible] = useState(false);

  const changeMale = () => {
    setGender(GENDER.MALE);
  };

  const changeFemale = () => {
    setGender(GENDER.FEMALE);
  };

  const changeHeight = (value) => {
    setHeight(value);
  };

  const lessWeight = () => {
    if (weight > 1) {
      setWeight(weight - 1);
    }
  };

  const moreWeight = () => {
    if (weight < 200) {
      setWeight(weight + 1);
    }
  };

  const lessWeightCont = () => {
    const timer = setInterval(() => {
      if (weight > 1) {
        setWeight((weight) => weight - 1);
      }
    }, 200);
    setTimer(timer);
  };

  const moreWeightCont = () => {
    const timer = setInterval(() => {
      if (weight < 200) {
        setWeight((weight) => weight + 1);
      }
    }, 200);
    setTimer(timer);
  };

  const lessAge = () => {
    if (age > 1) {
      setAge(age - 1);
    }
  };

  const moreAge = () => {
    if (age < 150) {
      setAge(age + 1);
    }
  };

  const lessAgeCont = () => {
    const timer = setInterval(() => {
      if (age > 1) {
        setAge((age) => age - 1);
      }
    }, 200);
    setTimer(timer);
  };

  const moreAgeCont = () => {
    const timer = setInterval(() => {
      if (age < 150) {
        setAge((age) => age + 1);
      }
    }, 200);
    setTimer(timer);
  };

  const calculateBMI = () => {
    setResult(weight / (height / 100) ** 2);
  };

  const resetState = () => {
    setGender(GENDER.MALE);
    setHeight(DEFAULT_HEIGHT);
    setWeight(DEFAULT_WEIGHT);
    setAge(DEFAULT_AGE);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#1a2634'} />
      <Text style={styles.appname}>BMI CALCULATOR</Text>
      <View style={styles.bigarea}>
        <TouchableHighlight
          underlayColor={'#323244'}
          activeOpacity={0.9}
          onPress={changeMale}
          style={[
            styles.smallarea,
            {
              backgroundColor:
                gender === GENDER.MALE ? HIGHLIGHT_COLOR : '#323244',
            },
          ]}>
          <View style={{alignItems: 'center'}}>
            <Foundation name="male-symbol" size={100} color="#02cee4" />
            <Text style={styles.whitetext}>MALE</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#323244'}
          activeOpacity={0.9}
          onPress={changeFemale}
          style={[
            styles.smallarea,
            {
              backgroundColor:
                gender === GENDER.FEMALE ? HIGHLIGHT_COLOR : '#323244',
            },
          ]}>
          <View style={{alignItems: 'center'}}>
            <Foundation name="female-symbol" size={100} color="#fe3e3c" />
            <Text style={styles.whitetext}>FEMALE</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.height}>
        <Text style={styles.whitetext}>HEIGHT</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={[styles.whitetext, {fontSize: 40, fontWeight: 'bold'}]}>
            {height}
          </Text>
          <Text style={[styles.whitetext, {fontSize: 20, fontWeight: 'bold'}]}>
            cm
          </Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={200}
          step={1}
          value={height}
          onValueChange={changeHeight}
          thumbTintColor="white"
          minimumTrackTintColor="#934f63"
          style={styles.slider}></Slider>
      </View>
      <View style={styles.bigarea}>
        <View style={[styles.smallarea, {paddingTop: 10, paddingBottom: 10}]}>
          <Text style={styles.whitetext}>WEIGHT</Text>
          <Text style={[styles.whitetext, {fontSize: 30}]}>{weight}</Text>
          <View style={styles.button}>
            <TouchableHighlight
              underlayColor={'gray'}
              activeOpacity={0.5}
              onPress={lessWeight}
              onLongPress={lessWeightCont}
              onPressOut={() => {
                clearInterval(timer);
                setTimer(null);
              }}
              style={styles.roundborder}>
              <View>
                <AntDesign name="minuscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
            <TouchableOpacity
              underlayColor={'gray'}
              activeOpacity={0.5}
              onPress={moreWeight}
              onLongPress={moreWeightCont}
              onPressOut={() => {
                clearInterval(timer);
                setTimer(null);
              }}
              style={styles.roundborder}>
              <View>
                <AntDesign name="pluscircle" size={30} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.smallarea, {paddingTop: 10, paddingBottom: 10}]}>
          <Text style={styles.whitetext}>AGE</Text>
          <Text style={[styles.whitetext, {fontSize: 30}]}>{age}</Text>
          <View style={styles.button}>
            <TouchableHighlight
              underlayColor={'gray'}
              activeOpacity={0.5}
              onPress={lessAge}
              onLongPress={lessAgeCont}
              onPressOut={() => {
                clearInterval(timer);
                setTimer(null);
              }}
              style={styles.roundborder}>
              <View>
                <AntDesign name="minuscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'gray'}
              activeOpacity={0.5}
              onPress={moreAge}
              onLongPress={moreAgeCont}
              onPressOut={() => {
                clearInterval(timer);
                setTimer(null);
              }}
              style={styles.roundborder}>
              <View>
                <AntDesign name="pluscircle" size={30} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableHighlight
        underlayColor={'#fe2264'}
        activeOpacity={0.5}
        onPress={() => {
          calculateBMI();
          toggleModal();
        }}
        style={styles.calcbutton}>
        <View>
          <Text style={[styles.whitetext, {fontSize: 20, fontWeight: 'bold'}]}>
            CALCULATE
          </Text>
        </View>
      </TouchableHighlight>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Text style={[styles.whitetext, {fontSize: 30, textAlign: 'center'}]}>
            Chỉ số BMI của bạn {gender == GENDER.MALE ? 'nam' : 'nữ'} này là{' '}
            {result.toFixed(2)}
          </Text>
          <TouchableHighlight
            underlayColor={'#fe2264'}
            activeOpacity={0.5}
            onPress={() => {
              resetState();
              toggleModal();
            }}
            style={styles.resetbutton}>
            <View>
              <Text
                style={[styles.whitetext, {fontSize: 20, fontWeight: 'bold'}]}>
                TÍNH LẠI
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2634',
  },
  appname: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 15,
  },
  bigarea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    marginBottom: 10,
  },
  smallarea: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#323244',
    borderRadius: 10,
  },
  whitetext: {
    color: 'white',
    fontSize: 15,
  },
  height: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#323244',
    borderRadius: 10,
  },
  slider: {
    width: '90%',
  },
  button: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roundborder: {
    borderRadius: 50,
  },
  calcbutton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#fe2264',
    borderRadius: 10,
  },
  resetbutton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe2264',
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1a2634',
    width: '100%',
  },
});
