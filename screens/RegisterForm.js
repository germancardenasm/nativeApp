import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Picker,
  TouchableOpacity,
  TouchableHighlight,
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
    this.setState({ idNumber: num }, () => console.log("State: ", this.state));
  };
  onChangeCellphone = text => {
    this.setState({ cellphone: text });
  };

  render() {
    return (
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
              onChange={this.onChangeIdNumber}
              value={this.state.idNumber}
              style={styles.inputText}
              fieldFeedback={""}
              placeholder={"Numero de Documento*"}
            />
          </View>
          <InputField
            style={styles.inputText}
            value={this.state.name}
            fieldFeedback={""}
            placeholder={"Celular*"}
            onChange={this.onChangeCellphone}
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
        </ScrollView>
      </View>
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
    width: 90,
    height: 50,
    marginRight: 5
  },
  picker: {
    width: 90,
    fontSize: 30,
    textAlign: "center"
  },
  label: {
    fontSize: 12,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10
  },
  touchableButton: {
    borderRadius: 10
  }
});
