import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {

  return (
    <ScrollView>
<View style={styles.container}>
        {/* Restaurant Introduction */}
        <Text style={styles.sectionTitle}>Welcome to Little Lemon!</Text>
        <Text style={styles.description}>
          Enjoy our delightful menu with fresh and tasty dishes. We provide a
          cozy and friendly atmosphere for a perfect dining experience.
        </Text>
        <Image
          source={require("../assets/images/restaurant1.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/restaurant2.jpg")}
          style={styles.image}
        />
        {/* About Us */}
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.description}>
          Little Lemon is a family-owned restaurant committed to serving
          high-quality and delicious meals. Our chefs use the finest ingredients
          to create a memorable culinary experience for our guests.
        </Text>

        {/* Extra Pictures */}
        <Image
          source={require("../assets/images/extra_picture1.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/extra_picture2.jpg")}
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Our Location 📍</Text>
        {/* Location Map */}

        <Text style={styles.description}>
          Visit us at the address above to experience the best culinary delights
          and a warm, welcoming atmosphere.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: 300,
    marginVertical: 20,
  },
  pinButton: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,

    borderColor: "black",
    borderWidth: 3
  },
  pinText: {
    color: 'black',
    fontSize: 14,
  },
});

export default WelcomeScreen;
