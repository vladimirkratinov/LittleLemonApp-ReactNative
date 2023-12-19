import { StyleSheet } from "react-native";

const stylesWelcome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: 300,
    marginVertical: 20,
  },
  pinButton: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,

    borderColor: "black",
    borderWidth: 3,
  },
  pinText: {
    color: "black",
    fontSize: 14,
  },
});

export default stylesWelcome;
