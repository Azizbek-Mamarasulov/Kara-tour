import LocationPreview from "@/components/LocationPreview";
import ProportionalImage from "@/components/ProportionalImage";
import AppText from "@/components/ui/AppText";
import { places } from "@/constants/places";
import { useNavigation } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useLayoutEffect } from "react";
import { Linking, ScrollView, View } from "react-native";

export default function DetailsScreen() {
  const params = useSearchParams();
  const navigation = useNavigation();

  const id = params.get("id");
  const title = params.get("title");

  const place = places.find((i) => i.id === Number(id));
  if (!place) {
    return;
  }
  // Set header title dynamically when component mounts or title/place changes
  useLayoutEffect(() => {
    navigation.setOptions({
      title: place.title || title || "Details",
    });
  }, [navigation, place, title]);

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
      {place?.content.map((item, key) => {
        return (
          <View key={key} style={{ margin: 5 }}>
            <View
              style={{
                backgroundColor: "white",
                elevation: 2,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <ProportionalImage uri={item.image} />
              <AppText style={{ fontSize: 24, padding: 5 }} bold>
                {item.title}
              </AppText>
            </View>
            <View>
              {item.description.map((desc, key) => (
                <AppText key={key} style={{ marginTop: 5, fontSize: 18 }}>
                  {"\u00A0\u00A0\u00A0\u00A0"}
                  {desc}
                </AppText>
              ))}
            </View>
          </View>
        );
      })}
      <View style={{ padding: 5, backgroundColor: "#e6e6e6" }}>
        <LocationPreview
          label={place.title}
          latitude={place.location.latitude || 0}
          longitude={place.location.longitude || 0}
        />
      </View>
      <View
        style={{
          marginTop: 25,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingTop: 12,
        }}
      >
        <AppText style={{ fontSize: 18, marginBottom: 4 }} bold>
          Reference:
        </AppText>
        <AppText
          style={{
            fontSize: 16,
            color: "blue",
            textDecorationLine: "underline",
            marginBottom: 10,
          }}
          onPress={() => Linking.openURL(place.reference.reference.link)}
        >
          {place.reference.reference.title}
        </AppText>

        <AppText style={{ fontSize: 18, marginBottom: 4 }} bold>
          License:
        </AppText>
        <AppText
          style={{
            fontSize: 16,
            color: "blue",
            textDecorationLine: "underline",
            marginBottom: 10,
          }}
          onPress={() => Linking.openURL(place.reference.licenseReference.link)}
        >
          {place.reference.licenseReference.title}
        </AppText>
      </View>
    </ScrollView>
  );
}
