import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

export default function VerifyOTP() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (text.length === 1 && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // Here you would implement the actual OTP verification logic
    // For now, we'll just navigate back to the login screen or home
    router.push("/");
  };

  const handleResend = () => {
    // Implement resend OTP logic here
    console.log("Resending OTP...");
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
          <Text className="text-xl font-semibold ml-4">Vérification OTP</Text>
        </View>

        {/* Main content */}
        <View className="items-center mt-4">
          <Text className="text-gray-700 text-center mb-8">
            Nous avons envoyé un code de vérification à votre adresse e-mail.
            Veuillez entrer le code ci-dessous pour confirmer votre identité.
          </Text>

          {/* OTP input fields */}
          <View className="flex-row justify-between w-full mb-8">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="w-16 h-16 border border-gray-300 rounded-md text-center text-xl"
                maxLength={1}
                keyboardType="number-pad"
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          {/* Verify button */}
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-md items-center w-full mb-6"
            onPress={handleVerify}
          >
            <Text className="text-white font-medium text-base">Vérifier</Text>
          </TouchableOpacity>

          {/* Resend code */}
          <View className="flex-row justify-center">
            <Text className="text-gray-600">
              Vous n'avez pas reçu le code ?{" "}
            </Text>
            <TouchableOpacity onPress={handleResend}>
              <Text className="text-green-500 font-medium">Renvoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
