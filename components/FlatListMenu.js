import { View, Text, FlatList, Image } from "react-native";
import menuItemsToDisplay1 from "../data1";
import menuStyles from "../menuStyles";

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
    All Rights Reserved by Little Lemon 2024 ©
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

const FlatListMenu = () => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={menuStyles.containerList}>
      <FlatList
        data={menuItemsToDisplay1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

export default FlatListMenu;
