import { StyleSheet, StatusBar } from "react-native";

const stylesMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 0,
    backgroundColor: "#F2F2F2"
    // backgroundColor: "blue"
  },
  containerList: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: "#F2F2F2"
    // backgroundColor: "blue"
  },
  headerText: {
    color: "black", // Change header text color
    fontSize: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between", // Align items horizontally
    alignItems: "center", // Align items vertically
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC", // Adjust the border color
    marginBottom: 5, // Add margin at the bottom of each item container
  },
  separatorSectionStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC", // Adjust the border color
    marginBottom: 1, // Add margin at the bottom of each item container
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Add margin to the text container
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    // fontStyle: 'italic',
  },
  footerText: {
    marginTop: 10,
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
  },
  itemImage: {
    width: 120, // Increase the image width
    height: 120, // Increase the image height
    marginRight: 10,
    borderRadius: 5, // Add border radius for rounded corners
  },
  itemText: {
    color: "black",
    fontSize: 18, // Decrease the font size for item text
  },
  itemPrice: {
    color: "green", // Change item price color
    fontSize: 16, // Decrease the font size for item price
    textAlign: "right",
    fontWeight: "bold",
  },
  itemDescription: {
    color: "#666666", // Adjust the color for the description text
    fontSize: 11, // Set the font size for the description text
    marginTop: 5, // Add margin at the top of the description text
  },
});

export default stylesMenu;
