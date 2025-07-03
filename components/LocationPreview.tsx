import React from "react";
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

interface LocationPreviewProps {
  latitude: number;
  longitude: number;
  label?: string;
  aspectRatio?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export default function LocationPreview({
  latitude,
  longitude,
  label = "Location",
  aspectRatio = 16 / 9,
  latitudeDelta = 0.01,
  longitudeDelta = 0.01,
}: LocationPreviewProps) {
  const width = useWindowDimensions().width - 10;
  const height = width / aspectRatio;

  const openMaps = () => {
    const lat = latitude;
    const lng = longitude;

    const query = `${lat},${lng}(${encodeURIComponent(label)})`;

    const url =
      Platform.OS === "ios" ? `maps:0,0?q=${query}` : `geo:0,0?q=${query}`;

    Linking.openURL(url).catch((err) =>
      console.error("Failed to open map:", err)
    );
  };

  return (
    <TouchableOpacity onPress={openMaps} activeOpacity={0.7}>
      <View style={[styles.container, { width, height }]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          pointerEvents="none"
        >
          <Marker coordinate={{ latitude, longitude }} title={label} />
        </MapView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});
