import { View, Text, StyleSheet, FlatList } from "react-native";

const menuItemsToDisplay = [
  { name: "Margherita Pizza", id: "1" },
  { name: "Chicken Alfredo Pasta", id: "2" },
  { name: "Sushi Platter", id: "3" },
  { name: "Cheeseburger", id: "4" },
  { name: "Caesar Salad", id: "5" },
  { name: "Pad Thai", id: "6" },
  { name: "Mushroom Risotto", id: "7" },
  { name: "Tandoori Chicken", id: "8" },
  { name: "Pho Soup", id: "9" },
  { name: "Grilled Salmon", id: "10" },
  { name: "Beef Tacos", id: "11" },
  { name: "Vegetarian Burrito", id: "12" },
  { name: "Shrimp Scampi", id: "13" },
  { name: "Chicken Shawarma", id: "14" },
  { name: "Caprese Salad", id: "15" },
  { name: "Spaghetti Bolognese", id: "16" },
  { name: "Hawaiian Poke Bowl", id: "17" },
  { name: "Chocolate Lava Cake", id: "18" },
  { name: "Chicken Satay Skewers", id: "19" },
  { name: "Greek Gyro Wrap", id: "20" },
];

const Item = ({ name }) => (
    <View style={[menuStyles.innerContainer, menuStyles.itemContainer]}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  itemText: {
    color: "black",
    fontSize: 24,
  },
});

export default MenuItems;
