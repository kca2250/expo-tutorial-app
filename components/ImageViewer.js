import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ PlaceHolderImage }) {
  return <Image style={styles.image} source={PlaceHolderImage} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
