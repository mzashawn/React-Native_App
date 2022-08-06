import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder="e.g. new work to do..."
        onChangeText={changeHandler}
      />
      <View style={styles.viewBtn}>
        <MaterialIcons
          name="add-task"
          size={24}
          color="black"
          onPress={() => submitHandler(text)}
          style={styles.addIcon}
        />

        {/* <Entypo
          style={styles.addIcon}
          name="add-to-list"
          size={24}
          onPress={() => submitHandler(text)}
        /> */}
        {/* <Button
          title="Add Task"
          onPress={() => submitHandler(text)}
          color={"blue"}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    top: 100,
    margin: 25,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 2,
    borderBottomColor: "coral",
    borderTopColor: "#fff",
    textAlign: "center",
    borderRadius: 15,
  },
  viewBtn: {
    top: 70,
    padding: 20,
  },
  addIcon: {
    top: 15,
    bottom: 10,
    textAlign: "center",
    fontSize: 28,
    color: "teal",
  },
});
