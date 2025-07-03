import TitleWithIcon from "@/components/places/TitleWithIcon";
import ProportionalImage from "@/components/ProportionalImage";
import { places } from "@/constants/places";
import { useRouter } from "expo-router";
import { ScrollView, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView>
        {places.map((place, index) => {
          return (
            <View
              key={index}
              style={{
                borderRadius: 10,
                overflow: "hidden",
                margin: 7,
                backgroundColor: "white",
                elevation: 2,
              }}
            >
              <TouchableNativeFeedback
                onPress={() =>
                  router.push({
                    pathname: "/details",
                    params: { id: place.id, title: place.title },
                  })
                }
              >
                <View>
                  <ProportionalImage
                    uri={place.image}
                    style={{
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <TitleWithIcon title={place.title} rating={place.rating} />
                </View>
              </TouchableNativeFeedback>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
