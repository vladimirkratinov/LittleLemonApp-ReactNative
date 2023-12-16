import { StyleSheet, StatusBar } from "react-native";

const stylesFeedback = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end"
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
    textAlignVertical: "top",
  },
  headingSection: {
    fontSize: 20,
    padding: 10,
    marginVertical: 0,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  infoSection: {
    fontSize: 14,
    padding: 10,
    marginVertical: 0,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
    // backgroundColor: "blue",
  },
  
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 160,
    resizeMode: "center"
  },
});

export default stylesFeedback;
