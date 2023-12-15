import React from "react";
import { View, Text, SectionList } from "react-native";
import stylesMenu from "../styles/stylesMenu";
import menuItemsToDisplay2 from "../data2";

const Item = ({ name, price }) => (
    <View style={stylesMenu.innerContainer}>
      <Text style={stylesMenu.itemText}>{name}</Text>
      <Text style={stylesMenu.itemText}>{price}</Text>
    </View>
  );

const Separator = () => <View style={stylesMenu.separatorSectionStyle} />;

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

const SectionListMenu = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={stylesMenu.headerStyle}>
      <Text style={stylesMenu.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={stylesMenu.containerList}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay2}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  );
};

export default SectionListMenu;
