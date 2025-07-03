import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewToken
} from "react-native";

interface ImageSliderProps {
  images: ImageSourcePropType[]; // local images (require(...))
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const screenWidth = Dimensions.get("window").width;
  const [dimensions, setDimensions] = useState({
    width: screenWidth - 10,
    height: 200,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  );

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    if (images.length === 0) return;

    // Get size from the first image synchronously
    const resolvedSource = Image.resolveAssetSource(images[0]);
    if (resolvedSource && resolvedSource.width && resolvedSource.height) {
      const width = screenWidth - 10;
      const scaleFactor = width / resolvedSource.width;
      const height = resolvedSource.height * scaleFactor;
      setDimensions({ width, height });
    } else {
      setDimensions({ width: screenWidth - 10, height: 200 });
    }
  }, [images]);

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={images}
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={[
              styles.imageContainer,
              { width: dimensions.width, height: dimensions.height },
            ]}
          >
            <Image
              source={item}
              style={{
                width: dimensions.width,
                height: dimensions.height,
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </View>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              currentIndex === idx ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "orange",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
