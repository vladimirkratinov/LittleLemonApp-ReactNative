import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import menuItemsToDisplay from "../data";

const ImageComponent = ({ source, style }) => {
  return <Image source={source} style={style} />;
};

const Item = ({ name, price, image }) => (
  // 2 styles: one for item container, second one for a underline
  <View style={[menuStyles.innerContainer, menuStyles.itemContainer]}>
    <ImageComponent source={{ uri: image }} style={menuStyles.itemImage} />
    <View style={menuStyles.textContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemPrice}>{price}</Text>
    </View>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} image={item.image} />
  );

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2", // Adjust the background color as needed
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between", // Align items horizontally
    alignItems: "center", // Align items vertically
  },
  itemImage: {
    width: 120, // Increase the image width
    height: 120, // Increase the image height
    marginRight: 5,
    borderRadius: 5, // Add border radius for rounded corners
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Add margin to the text container
  },
  headerText: {
    color: "black", // Change header text color
    fontSize: 24,
    fontWeight: "bold", // Add bold font weight
    textAlign: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC", // Adjust the border color
    marginBottom: 10, // Add margin at the bottom of each item container
  },
  itemText: {
    color: "black",
    fontSize: 18, // Decrease the font size for item text
  },
  itemPrice: {
    color: "green", // Change item price color
    fontSize: 16, // Decrease the font size for item price
    textAlign: "right",
  },
});

export default MenuItems;
