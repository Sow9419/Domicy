import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [isLayoutMounted, setIsLayoutMounted] = useState(false);

  useEffect(() => {
    // Set layout mounted state after initial render
    setIsLayoutMounted(true);
  }, []);

  useEffect(() => {
    // Only navigate when layout is mounted
    if (isLayoutMounted) {
      router.replace("/onboarding");
    }
  }, [isLayoutMounted]);

  return <View className="w-full h-full"></View>;
}