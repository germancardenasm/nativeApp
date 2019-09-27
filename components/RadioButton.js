import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default RadioButton = props => {
  const [check, setCheck] = useState(false);

  return (
    <View key={item.key} style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.circle}
        onPress={setCheck(true)} // we set our value state to key
      >
        {check && <View style={styles.checkedCircle} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center"
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B"
  }
});
