import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import menuItemsToDisplay from "../data";

const ImageComponent = ({ source, style }) => {
  return <Image source={source} style={style} />;
};

const Separator = () => <View style={menuStyles.separator} />;

const Header = () => (
  <Text style={menuStyles.headerText}>
    ✨Use code LEMON15 for an exclusive 15% off.
  </Text>
);

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All rights reserved by Little Lemon, 2024©
  </Text>
);

const Item = ({ name, price, image, description }) => (
  // 2 styles: one for item container, second one for a underline
  // can use array of styles: [menuStyles.innerContainer, menuStyles.itemContainer]
  <View style={menuStyles.innerContainer}>
    <ImageComponent source={{ uri: image }} style={menuStyles.itemImage} />
    <View style={menuStyles.textContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemDescription}>{description}</Text>
      <Text style={menuStyles.itemPrice}>${price}</Text>
    </View>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2", // Adjust the background color as needed
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
  // itemContainer: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#CCCCCC",
  //   marginBottom: 5,
  // },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC", // Adjust the border color
    marginBottom: 5, // Add margin at the bottom of each item container
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Add margin to the text container
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

export default MenuItems;
