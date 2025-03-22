import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import {
  ArrowLeft,
  Camera,
  UserRound,
  MapPin,
  Home,
  Building,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

type Step = "final_profile" | "info_perso";

export default function CreateProfile() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("info_perso");
  const [slogan, setSlogan] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState<"tenant" | "owner" | null>(null);

  const handleBack = () => {
    if (step === "final_profile") {
      setStep("info_perso");
    } else {
      router.back();
    }
  };

  const handleNext = () => {
    if (step === "info_perso") {
      setStep("final_profile");
    } else {
      // Submit form and navigate to next screen
      console.log("Form submitted");
      // router.push('/dashboard');
    }
  };

  const renderFinalProfile = () => (
    <ScrollView className="flex-1 bg-white">
      <View className="px-4 py-6 flex-1">
        <Text className="text-2xl font-semibold text-center mb-8">
          Création de profil
        </Text>

        {/* Profile Photo */}
        <View className="items-center mb-8">
          <View className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 items-center justify-center bg-gray-50">
            <Camera color="#9ca3af" size={24} />
          </View>
          <View className="absolute bottom-7 right-[155] bg-green-500 p-1 rounded-full">
            <UserRound color="white" size={16} />
          </View>
          <Text className="text-gray-500 mt-2">Ajouter une photo</Text>
        </View>

        {/* ID Document */}
        <View className="mb-8">
          <Text className="text-lg font-medium mb-4">Pièce d'identité</Text>
          <View className="border-2 border-dashed border-gray-300 rounded-lg p-6 items-center">
            <View className="bg-gray-200 p-3 rounded-lg mb-2">
              <Camera color="#9ca3af" size={24} />
            </View>
            <Text className="text-gray-500 text-center mb-4">
              Veuillez scanner ou télécharger votre pièce d'identité
            </Text>
            <TouchableOpacity className="bg-green-500 flex-row items-center justify-center py-3 px-4 rounded-lg w-full">
              <Camera color="white" size={20} />
              <Text className="text-white font-medium ml-2">
                Scanner / Télécharger
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* WhatsApp Number */}
        <View className="mb-6">
          <Text className="text-lg font-medium mb-2">Numéro WhatsApp</Text>
          <View className="flex-row">
            <View className="border border-gray-300 rounded-l-lg px-3 py-3 justify-center">
              <Text>+33</Text>
            </View>
            <TextInput
              className="flex-1 border border-gray-300 rounded-r-lg px-3 py-2"
              placeholder="Numéro WhatsApp"
              value={whatsappNumber}
              onChangeText={setWhatsappNumber}
              keyboardType="phone-pad"
            />
          </View>
          <Text className="text-gray-500 text-sm mt-1">
            Example: 94 23 19 14
          </Text>
        </View>

        {/* Slogan */}
        <View className="mb-8">
          <Text className="text-lg font-medium mb-2">
            Slogan Pour attirer les clients
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3"
            placeholder="Ex: Superhôte · Répond en moins d'une heure..."
            value={slogan}
            onChangeText={setSlogan}
            multiline
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          className="bg-green-500 py-4 rounded-lg items-center"
          onPress={handleNext}
        >
          <Text className="text-white font-medium">
            Finaliser l'inscription
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderInfoPerso = () => (
    <ScrollView className="flex-1 bg-white">
      <View className="px-4 py-6 flex-1">
        <Text className="text-2xl font-semibold text-center mb-8">
          Finaliser votre inscription
        </Text>

        {/* Full Name */}
        <View className="mb-6">
          <Text className="text-lg font-medium mb-2">Nom complet</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-3 py-3"
            placeholder="Entrez votre nom complet"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Phone Number */}
        <View className="mb-6">
          <Text className="text-lg font-medium mb-2">Numéro de téléphone</Text>
          <View className="flex-row">
            <View className="border border-gray-300 rounded-l-lg px-3 py-3 justify-center">
              <Text>+33</Text>
            </View>
            <TextInput
              className="flex-1 border border-gray-300 rounded-r-lg px-3 py-2"
              placeholder="6 12 34 56 78"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Address */}
        <View className="mb-6">
          <Text className="text-lg font-medium mb-2">Adresse complète</Text>
          <TouchableOpacity className="border border-gray-300 rounded-lg px-3 py-3 flex-row justify-between items-center">
            <Text className="text-gray-400">Sélectionnez votre adresse</Text>
            <MapPin color="#9ca3af" size={20} />
          </TouchableOpacity>
        </View>

        {/* User Role */}
        <View className="mb-8">
          <Text className="text-lg font-medium mb-2">Votre rôle</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              className={`border rounded-lg py-4 px-6 w-[48%] items-center ${userRole === "tenant" ? "border-green-500 bg-green-50" : "border-gray-300"}`}
              onPress={() => setUserRole("tenant")}
            >
              <Home
                color={userRole === "tenant" ? "#22c55e" : "#9ca3af"}
                size={24}
              />
              <Text
                className={`mt-2 ${userRole === "tenant" ? "text-green-500" : "text-gray-700"}`}
              >
                Locataire
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`border rounded-lg py-4 px-6 w-[48%] items-center ${userRole === "owner" ? "border-green-500 bg-green-50" : "border-gray-300"}`}
              onPress={() => setUserRole("owner")}
            >
              <Building
                color={userRole === "owner" ? "#22c55e" : "#9ca3af"}
                size={24}
              />
              <Text
                className={`mt-2 ${userRole === "owner" ? "text-green-500" : "text-gray-700"}`}
              >
                Propriétaire
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          className="bg-green-500 py-4 rounded-lg items-center mb-4"
          onPress={handleNext}
        >
          <Text className="text-white font-medium">Continuer</Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text className="text-center text-gray-500 text-sm">
          En finalisant votre inscription, vous acceptez nos{" "}
          <Text className="text-purple-600">conditions d'utilisation</Text> et
          notre
          <Text className="text-purple-600"> politique de confidentialité</Text>
        </Text>
      </View>
    </ScrollView>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* Custom Header */}
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={handleBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 text-center font-medium text-lg">
          Création de profil
        </Text>
        <View style={{ width: 24 }} />
      </View>

      {step === "info_perso" ? renderInfoPerso() : renderFinalProfile()}
    </View>
  );
}
