import { useEffect } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to onboarding screen when the app starts
    router.replace("/onboarding");
  }, []);

  return <View className="w-full h-full"></View>;
}
