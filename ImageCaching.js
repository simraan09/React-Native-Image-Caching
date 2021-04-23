import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import shorthash from "shorthash";
import * as FileSystem from "expo-file-system";

export default function ImageCache({ uri, styles }) {
  const [sourceUri, setSourceUri] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const downloadOrGetImage = async () => {
      // Generate random unique short file name to image uri
      const name = shorthash.unique(uri);
      // Image path in cache directory
      const path = `${FileSystem.cacheDirectory}${name}`;
      // Get image from directory
      const image = await FileSystem.getInfoAsync(path);
      // Check weather an image exists in device
      if (image.exists) {
        setSourceUri(image.uri);
        setMessage("Loading image from cache directory");
        return;
      }
      // Image dose not exists download into the cache directory
      const newImage = await FileSystem.downloadAsync(uri, path);
      setSourceUri(newImage.uri);
      setMessage("Downloading image into the cache directory");
    };
    downloadOrGetImage();
  }, []);

  return (
    <React.Fragment>
      <Image source={{ uri: sourceUri }} style={styles.img} />
      <Text style={styles.message}>{message}</Text>
    </React.Fragment>
  );
}
