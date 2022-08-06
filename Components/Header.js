import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const person = {
  name: "shawn",
  designation: "Frontend developer(Trainee)",
};

const msg = "Developed by";

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.title}>My Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextV}>
        <Text style={styles.subtext} numberOfLines={2}>
          {msg} {person.name} who is a {person.designation} in Oshni Software
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    height: 100,
    paddingTop: 38,
    backgroundColor: "#11292A",
  },

  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  nextV: {
    top: 50,
    backgroundColor: "#CA6527",
    padding: 5,
    borderWidth: 0.8,
    borderTopColor: "red",
    borderBottomColor: "gold",
  },

  subtext: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
});

export default Header;
