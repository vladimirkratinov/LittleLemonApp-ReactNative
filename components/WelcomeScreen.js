import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import stylesWelcome from "../styles/stylesWelcome";

const WelcomeScreen = ( {navigation }) => {
  return (
    <ScrollView>
      <View style={stylesWelcome.container}>
        {/* Restaurant Introduction */}
        <Text style={stylesWelcome.sectionTitle}>Welcome to Little Lemon!</Text>
        <Text style={stylesWelcome.description}>
          Enjoy our delightful menu with fresh and tasty dishes. We provide a
          cozy and friendly atmosphere for a perfect dining experience.
        </Text>
        <Pressable style={stylesWelcome.button} onPress={() => navigation.navigate('FlatList')}>
          <Text style={stylesWelcome.buttonText}>View Menu</Text>
        </Pressable>
        <Image
          source={require("../assets/images/restaurant1.jpg")}
          style={stylesWelcome.image}
        />
        <Image
          source={require("../assets/images/restaurant2.jpg")}
          style={stylesWelcome.image}
        />
        
        {/* About Us */}
        <Text style={stylesWelcome.sectionTitle}>About Us</Text>
        <Text style={stylesWelcome.description}>
          Little Lemon is a family-owned restaurant committed to serving
          high-quality and delicious meals. Our chefs use the finest ingredients
          to create a memorable culinary experience for our guests.
        </Text>

        {/* Extra Pictures */}
        <Image
          source={require("../assets/images/extra_picture1.jpg")}
          style={stylesWelcome.image}
        />
        <Image
          source={require("../assets/images/extra_picture2.jpg")}
          style={stylesWelcome.image}
        />

        <Text style={stylesWelcome.sectionTitle}>Our Location 📍</Text>
        {/* Location Map */}

        <Text style={stylesWelcome.description}>
          Visit us at the address above to experience the best culinary delights
          and a warm, welcoming atmosphere.
        </Text>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
