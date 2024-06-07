import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Appearance, useColorScheme } from "react-native";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  result,
  TouchableOpacity,
  Pressable,
  props,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onButtonPress = (item) => {
    if (item === "C") {
      setInput("");
      setResult("");
    } else if (item === "=") {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + item);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric+arrow"
        />
        <View style={styles.buttonContainer}>
          {[
            "C",
            "()",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "+/-",
            "0",
            ".",
            "=",
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => onButtonPress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  resultText: {
    fontSize: 35,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  inputText: {
    fontSize: 35,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    padding: 9,
  },
  button: {
    fontSize: 38,
    width: "25%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightblue",
    backgroundColor: "lightgrey",
    borderRadius: 70,
  },
  buttonText: {
    fontSize: 35,
    lineHeight: 40,
    letterSpacing: 5,
    color: "black",
  },
});
