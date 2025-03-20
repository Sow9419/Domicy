import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Shield, Home, Briefcase } from "lucide-react-native";
import { useState } from "react";
import AuthModal from "./components/AuthModal";

export default function OnboardingScreen() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  return (
    <ScrollView className="flex-1">
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        }}
        className="w-full h-screen"
      >
        <View className="flex-1 bg-black/30 px-6 justify-between">
          {/* Top section with title and subtitle */}
          <View className="mt-20">
            <Text className="text-white text-3xl font-bold mb-2">
              Trouvez votre maison idéale
            </Text>
            <Text className="text-white text-lg">
              Location simple et rapide, partout en France
            </Text>
          </View>

          {/* Bottom section with features and buttons */}
          <View className="mb-10">
            {/* Features */}
            <View className="mb-8 space-y-6">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-4">
                  <Home color="white" size={20} />
                </View>
                <View>
                  <Text className="text-white font-bold text-base">
                    Milliers de propriétés
                  </Text>
                  <Text className="text-white text-sm">
                    Un large choix de maisons et d'appartements
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-4">
                  <Briefcase color="white" size={20} />
                </View>
                <View>
                  <Text className="text-white font-bold text-base">
                    Réservation instantanée
                  </Text>
                  <Text className="text-white text-sm">
                    Réservez en quelques clics seulement
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-4">
                  <Shield color="white" size={20} />
                </View>
                <View>
                  <Text className="text-white font-bold text-base">
                    100% sécurisé
                  </Text>
                  <Text className="text-white text-sm">
                    Paiements et données personnelles protégés
                  </Text>
                </View>
              </View>
            </View>

            {/* CTA Button */}
            <TouchableOpacity
              className="bg-green-500 py-4 rounded-md items-center mb-4"
              onPress={() => setShowSignupModal(true)}
            >
              <Text className="text-white font-bold text-lg">Commencer</Text>
            </TouchableOpacity>

            {/* Login link */}
            <TouchableOpacity onPress={() => setShowLoginModal(true)}>
              <Text className="text-white text-center">
                Déjà un compte? <Text className="underline">Se connecter</Text>
              </Text>
            </TouchableOpacity>

            {/* Auth Modals */}
            <AuthModal
              isVisible={showLoginModal}
              onClose={() => setShowLoginModal(false)}
              type="login"
            />
            <AuthModal
              isVisible={showSignupModal}
              onClose={() => setShowSignupModal(false)}
              type="signup"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
