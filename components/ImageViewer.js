import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeHolderImage, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeHolderImage;

  return <Image style={styles.image} source={imageSource} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
