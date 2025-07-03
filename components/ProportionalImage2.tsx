import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  useWindowDimensions,
  View,
} from "react-native";

interface ProportionalImageProps {
  source: ImageSourcePropType; // only local images (require(...))
  style?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

export default function ProportionalImage({
  source,
  style,
  imageStyle,
  resizeMode = "contain",
}: ProportionalImageProps) {
  const { width: screenWidth } = useWindowDimensions();
  const fallbackWidth = screenWidth - 10;
  const fallbackHeight = 200;

  const [dimensions, setDimensions] = useState({
    width: fallbackWidth,
    height: fallbackHeight,
  });

  useEffect(() => {
    const resolvedSource = Image.resolveAssetSource(source);

    if (
      resolvedSource &&
      typeof resolvedSource.width === "number" &&
      typeof resolvedSource.height === "number"
    ) {
      const scaleFactor = fallbackWidth / resolvedSource.width;
      const calculatedHeight = resolvedSource.height * scaleFactor;
      setDimensions({ width: fallbackWidth, height: calculatedHeight });
    } else {
      // Use fallback size if unable to resolve
      setDimensions({ width: fallbackWidth, height: fallbackHeight });
    }
  }, [source, fallbackWidth]);

  // Show loader only if dimensions are zero (should not happen here)
  if (!dimensions.width || !dimensions.height) {
    return (
      <View
        style={[
          {
            width: fallbackWidth,
            height: fallbackHeight,
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
      source={source}
      style={[
        { width: dimensions.width, height: dimensions.height },
        imageStyle,
      ]}
      resizeMode={resizeMode}
    />
  );
}
