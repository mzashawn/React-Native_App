import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, clickAction }) {
  return (
    // <View style={styles.toList}>
    <>
      <TouchableOpacity>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
      <View>
        <AntDesign
          style={styles.deleteIcon}
          name="delete"
          size={18}
          color="#333"
          onPress={() => clickAction(item.key)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  toList: {
    top: 40,
  },
  listText: {
    color: "green",
    fontSize: 16,
    fontStyle: "italic",
  },
  item: {
    // flexDirection: "row",
    padding: 16,
    marginTop: 16,
    marginLeft: 40,
    borderColor: "#dcdcfe",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },

  deleteIcon: {
    bottom: 38,
    marginLeft: 200,

    right: 14,
  },
});
