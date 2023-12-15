import React from "react";
import { View, Text, SectionList } from "react-native";
import menuStyles from "../menuStyles";
import menuItemsToDisplay2 from "../data2";

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );

const Separator = () => <View style={menuStyles.separatorSectionStyle} />;

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

const SectionListMenu = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.containerList}>
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
