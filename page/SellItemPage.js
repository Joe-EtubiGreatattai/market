import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Swiper from "react-native-swiper";
import Header from "./../component/SettingsHeader";

const SellItemPage = () => {
  const [mainThumbnail, setMainThumbnail] = useState(null);
  const [sliderImages, setSliderImages] = useState([null, null, null]);
  const [price, setPrice] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [maxDays, setMaxDays] = useState("");

  const pickImage = async (index) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (index === 0) {
        setMainThumbnail(result.uri);
      } else {
        const newSliderImages = [...sliderImages];
        newSliderImages[index - 1] = result.uri;
        setSliderImages(newSliderImages);
      }
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      mainThumbnail,
      sliderImages,
      price,
      itemName,
      quantity,
      maxDays,
    });
  };

  return (
    <>
      <Header title={"Sell an Item"} />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => pickImage(0)}
          style={styles.imageContainer}
        >
          {mainThumbnail ? (
            <Image source={{ uri: mainThumbnail }} style={styles.image} />
          ) : (
            <Text style={styles.selectImageText}>Select Main Thumbnail</Text>
          )}
        </TouchableOpacity>

        <View style={styles.swiperContainer}>
          <Swiper style={styles.swiper} showsButtons={true} loop={false}>
            {sliderImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => pickImage(index + 1)}
                style={styles.imageContainer}
              >
                {image ? (
                  <Image source={{ uri: image }} style={styles.image} />
                ) : (
                  <Text style={styles.selectImageText}>
                    Select Slider Image {index + 1}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <TextInput
          style={styles.input}
          placeholder="Max Days for Delivery"
          keyboardType="numeric"
          value={maxDays}
          onChangeText={setMaxDays}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    height: 200,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  selectImageText: {
    color: "#888",
    textAlign: "center",
  },
  swiperContainer: {
    height: 200,
    marginBottom: 16,
  },
  swiper: {
    height: "100%",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#FF6F00",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SellItemPage;
