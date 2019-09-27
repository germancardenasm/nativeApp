import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default InputField = props => {
  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        style={{ ...props.style, ...styles.inputText }}
        onChangeText={text => props.onChange(text)}
        value={props.text}
        placeholder={props.placeholder}
      />
      <Text style={styles.label}>{props.fieldFeedback}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    flex: 1
  },
  fieldFeedback: {
    fontSize: 12,
    color: "rgba(96,96,96, 1)",
    lineHeight: 18,
    textAlign: "left"
  },
  inputText: {
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1
  }
});
