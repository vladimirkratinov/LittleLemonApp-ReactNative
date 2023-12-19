import { View, Text, FlatList, Image, Pressable } from "react-native";
import menuItemsToDisplay1 from "../data1";
import stylesMenu from "../styles/stylesMenu";

const ImageComponent = ({ source, style }) => {
  return <Image source={source} style={style} />;
};

const Separator = () => <View style={stylesMenu.separator} />;

const Header = () => (
  <Text style={stylesMenu.headerText}>
    ✨Use code LEMON15 for an exclusive 15% off.
  </Text>
);

const Footer = () => (
  <Text style={stylesMenu.footerText}>
    All Rights Reserved by Little Lemon 2024 ©
  </Text>
);

const Item = ({ name, price, image, description }) => (
  // can use array of styles: [menuStyles.innerContainer, menuStyles.itemContainer]
  <View style={stylesMenu.innerContainer}>
    <ImageComponent source={{ uri: image }} style={stylesMenu.itemImage} />
    <View style={stylesMenu.textContainer}>
      <Text style={stylesMenu.itemText}>{name}</Text>
      <Text style={stylesMenu.itemDescription}>{description}</Text>
      <Text style={stylesMenu.itemPrice}>${price}</Text>
    </View>
  </View>
);

const FlatListMenu = ( {navigation} ) => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={stylesMenu.containerList}>
      {/* <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable> */}
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
