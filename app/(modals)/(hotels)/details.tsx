import AvailableFacilities from "@/components/hotels/AvailableFacilities";
import ImageSlider from "@/components/hotels/ImageSlider";
import LocationPreview from "@/components/LocationPreview";
import { hotels } from "@/constants/hotels";
import { useNavigation } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import React, { useLayoutEffect } from "react";
import { Button, Linking, ScrollView, View } from "react-native";

export default function Details() {
  const params = useSearchParams();
  const navigation = useNavigation();
  const id = params.get("id");
  if (!id) {
    return null;
  }
  const data = hotels.find((i) => i.id === Number(id));
  if (!data) {
    return null;
  }
  useLayoutEffect(() => {
    navigation.setOptions({ title: data.title });
  }, [params]);
  return (
    <ScrollView contentContainerStyle={{ padding: 5, paddingBottom: 15 }}>
      <View style={{ gap: 10 }}>
        <ImageSlider images={data.images} />
        <View style={{ paddingHorizontal: 5, marginVertical: 10 }}>
          <Button
            title="📞 Call"
            color="orange"
            onPress={() => Linking.openURL("tel:xxxxxxxxxx")}
          />
        </View>
        <AvailableFacilities />
        <LocationPreview
          latitude={data.location.latitude}
          longitude={data.location.longitude}
          latitudeDelta={0.0012}
          longitudeDelta={0.0012}
          label={data.title}
        />
      </View>
    </ScrollView>
  );
}
