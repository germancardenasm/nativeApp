import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Picker,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  View
} from "react-native";

import InputField from "../components/InputField/InputField";

export default class RegisterForm extends Component {
  state = {
    idType: "C.C",
    idNumber: null,
    cellphone: "",
    licencePlate: "",
    name: ""
  };

  onChangeIdType = itemValue => {
    this.setState({ idType: itemValue });
  };
  onChangeIdNumber = num => {
    console.log("onChangeIdNumber: ", num);
    console.log("state:", this.state);
    this.setState({ idNumber: num }, () =>
      console.log("state after update: ", this.state)
    );
  };
  onChangeCellphone = text => {
    this.setState({ cellphone: text });
  };
  onCloseKeyboard = () => Keyboard.dismiss();

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onCloseKeyboard}>
        <View style={styles.formContainer}>
          <ScrollView>
            <Text style={styles.titleText}>¡Esto sera rapido!</Text>
            <View style={styles.inline}>
              <View style={styles.pickerContainer}>
                <Picker
                  onValueChange={this.onChangeIdType}
                  selectedValue={this.state.idType}
                  style={styles.picker}
                  itemStyle={{
                    color: "blue"
                  }}
                >
                  <Picker.Item label="CC" value="CC" />
                  <Picker.Item label="CE" value="CE" />
                </Picker>
              </View>

              <InputField
                keyboardType="number-pad"
                onChange={this.onChangeIdNumber}
                text={this.state.idNumber}
                style={styles.inputText}
                fieldFeedback={""}
                placeholder={"Numero de Documento*"}
              />
            </View>

            <InputField
              keyboardType="number-pad"
              onChange={this.onChangeCellphone}
              maxLength={10}
              style={styles.inputText}
              text={this.state.cellphone}
              fieldFeedback={""}
              placeholder={"Celular*"}
            />

            <TouchableHighlight
              style={styles.touchableButton}
              activeOpacity={0.7}
              onPress={() => console.log("pressed")}
            >
              <View style={styles.button}>
                <Text>REGISTRAR</Text>
              </View>
            </TouchableHighlight>

            <View style={{ ...styles.inline, ...styles.textParagraph }}>
              <Text>
                Al ingresar tus datos autorizas su tratamiento acrode con
                nuestra politica de manejo de informacion personal HABEAS DATA.
              </Text>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RegisterForm.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    paddingBottom: "10%"
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    lineHeight: 24,
    marginBottom: 30,
    textAlign: "center"
  },
  inline: {
    flex: 1,
    flexDirection: "row"
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    width: 100,
    height: 50,
    marginRight: 5,
    paddingLeft: 15
  },
  picker: {
    width: 90,
    fontSize: 30,
    textAlign: "center"
  },
  inputText: {
    height: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10
  },
  touchableButton: {
    borderRadius: 10
  },
  textParagraph: {
    marginTop: 50
  }
});
