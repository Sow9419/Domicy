import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ArrowLeft, Mail } from "lucide-react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleResetPassword = () => {
    // Here you would implement the actual password reset logic
    // For now, we'll just navigate to the OTP verification screen
    router.push("/auth/verify_otp");
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View className="flex-1 p-4">
        {/* Header with back button */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold ml-4">
            Mot de passe oublié
          </Text>
        </View>

        {/* Main content */}
        <View className="mt-4">
          <Text className="text-gray-700 mb-8">
            Ne vous inquiétez pas ! Il arrive à tout le monde d'oublier son mot
            de passe. Veuillez entrer votre adresse e-mail ci-dessous et nous
            vous enverrons les instructions pour réinitialiser votre mot de
            passe.
          </Text>

          {/* Email input */}
          <Text className="font-medium mb-2">Adresse e-mail</Text>
          <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 mb-8">
            <Mail size={20} color="#6b7280" />
            <TextInput
              className="flex-1 ml-2 text-base"
              placeholder="exemple@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Reset button */}
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-md items-center"
            onPress={handleResetPassword}
          >
            <Text className="text-white font-medium text-base">
              Réinitialiser le mot de passe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
