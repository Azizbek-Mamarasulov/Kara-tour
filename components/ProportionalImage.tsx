import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  useWindowDimensions,
  View,
} from "react-native";

interface ProportionalImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

export default function ProportionalImage({
  uri,
  style,
  imageStyle,
  resizeMode = "contain",
}: ProportionalImageProps) {
  const { width: screenWidth } = useWindowDimensions();
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Image.getSize(
      uri,
      (originalWidth, originalHeight) => {
        const calculatedWidth = screenWidth - 10;
        const scaleFactor = calculatedWidth / originalWidth;
        const calculatedHeight = originalHeight * scaleFactor;
        setDimensions({ width: calculatedWidth, height: calculatedHeight });
        setLoading(false);
      },
      (error) => {
        console.error(`Failed to get size for image: ${uri}`, error);
        setDimensions({ width: screenWidth - 10, height: 200 }); // fallback size
        setLoading(false);
      }
    );
  }, [uri, screenWidth]);

  if (loading) {
    return (
      <View
        style={[
          {
            width: screenWidth - 10,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ccc",
          },
          style,
        ]}
      >
        <ActivityIndicator size="small" color="#888" />
      </View>
    );
  }

  return (
    <Image
      source={{ uri }}
      style={[
        { width: dimensions.width, height: dimensions.height },
        imageStyle,
      ]}
      resizeMode={resizeMode}
    />
  );
}
