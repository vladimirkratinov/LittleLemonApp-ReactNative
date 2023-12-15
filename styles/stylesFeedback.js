import { StyleSheet, StatusBar } from "react-native";

const stylesFeedback = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginHorizontal: 0,
    backgroundColor: "#495E57",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 0,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 14,
    padding: 10,
    marginVertical: 0,
    color: "#EDEFEE",
    textAlign: "center",
    fontStyle: "italic",
    backgroundColor: "#495E57",
    // backgroundColor: "blue",
  },
  headingSection: {
    fontSize: 20,
    padding: 10,
    marginVertical: 0,
    color: "#EDEFEE",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#495E57",
    // backgroundColor: "red",
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "center",
    borderRadius: 0,
    marginVertical: 0,
    margin: 0
  },
});

export default stylesFeedback;
