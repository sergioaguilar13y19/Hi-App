import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

export type messageProps = {
  user: string;
  message: string;
  date: string;
};

export const GlobalMessage: FC<messageProps> = ({ date, message, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text>userPhoto</Text>
      </View>
      <View style={styles.messageContainer}>
        <View style={styles.infoMessage}>
          <Text>{user}</Text>
          <Text>{message}</Text>
        </View>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    height: 60,
    backgroundColor: "#fff",
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  imgContainer: {
    width: 60,
    borderWidth: 1,
    borderRadius: 90,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoMessage: {
    flex:1,
    flexDirection: "column",
    justifyContent: "space-between",
  
  },
});
