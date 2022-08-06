import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";
import Sandbox from "./Components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play guitar", key: "3" },
    { text: "purchase medicines", key: "4" },
  ]);

  const handleData = (key) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    //Conditional validation testing...

    if (text.length > 3) {
      setTodos((previousTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...previousTodos,
        ];
      });
    } else if (text.length == 0) {
      Alert.alert("Text input is null", "Plz. put some text in the textbox");
    } else {
      Alert.alert(
        "Nope, you can't do this!",
        "Todos must contain more than 3 characters",
        [
          {
            text: "Got it",
            onPress: () =>
              Alert.alert("alert closed", "Back to the app", [
                {
                  text: "understood",
                },
              ]),
          },
        ]
      );
    }
  };
  return (
    //</TouchableWithoutFeedback> is using to handle the keyboard view in here
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <Sandbox /> */}

        <Header />
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.content}>
          {/* to form */}

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} clickAction={handleData} />
              )}
            />

            {/* <Text>{item.text}</Text> */}
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#acacdf",
    backgroundColor: "#abcdef",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    top: 20,
    padding: 40,

    flex: 1,
  },
  list: {
    marginTop: 30,
    alignItems: "center",

    flex: 1,
  },
});
