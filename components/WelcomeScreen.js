// WelcomeScreen.js

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const WelcomeScreen = () => {
  const mapRef = React.useRef(null);

  const centerToRestaurant = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: 41.8781,
        longitude: -87.6298,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Little Lemon Restaurant</Text>

        {/* Restaurant Introduction */}
        <Image
          source={require("../assets/images/restaurant.jpg")}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>Welcome to Little Lemon!</Text>
        <Text style={styles.description}>
          Enjoy our delightful menu with fresh and tasty dishes. We provide a
          cozy and friendly atmosphere for a perfect dining experience.
        </Text>

        {/* About Us */}
        <Image
          source={require("../assets/images/about_us.jpg")}
          style={styles.image}
        />
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
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 41.8781,
            longitude: -87.6298,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 41.8781, longitude: -87.6298 }}
            title="Little Lemon Restaurant"
            description="Delicious Food Here!"
          />
          <Callout>
            <View>
            <TouchableOpacity
              style={styles.pinButton}
              onPress={centerToRestaurant}
            >
              <Text style={styles.pinText}>Center</Text>
            </TouchableOpacity>
            </View>
          </Callout>
        </MapView>
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
    marginTop: 5,
    marginLeft: 5,
    borderColor: "black",
    borderWidth: 3
  },
  pinText: {
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
    fontSize: 14,
  },
});

export default WelcomeScreen;
