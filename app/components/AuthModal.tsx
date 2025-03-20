import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { X, Eye, EyeOff } from "lucide-react-native";
import { useRouter } from "expo-router";

type AuthModalProps = {
  isVisible: boolean;
  onClose: () => void;
  type: "login" | "signup";
};

export default function AuthModal({
  isVisible,
  onClose,
  type,
}: AuthModalProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isLogin = type === "login";

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white w-full h-full p-6 mx-4">
          {/* Header with close button */}
          <View className="flex-row justify-end">
            <Pressable onPress={onClose}>
              <X size={24} color="#000" />
            </Pressable>
          </View>

          {/* Avatar and title */}
          <View className="items-center mb-6">
            <View className="w-16 h-16 bg-green-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-xl font-bold">dy</Text>
            </View>
            <Text className="text-2xl font-bold text-center">
              {isLogin ? "Bienvenue sur Fiverr" : "Créer un compte"}
            </Text>
            <Text className="text-gray-600 text-center mt-1">
              {isLogin
                ? "Veuillez saisir votre email et mot de passe."
                : "Veuillez remplir les informations suivantes pour créer votre compte."}
            </Text>
          </View>

          {/* Form fields */}
          <View className="space-y-4 mb-6">
            <TextInput
              className="bg-gray-100 p-4 rounded-md text-gray-800"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View>
              <TextInput
                className="bg-gray-100 p-4 rounded-md text-gray-800"
                placeholder="Mot de passe"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye size={20} color="#9ca3af" />
                ) : (
                  <EyeOff size={20} color="#9ca3af" />
                )}
              </TouchableOpacity>
            </View>

            {!isLogin && (
              <View>
                <TextInput
                  className="bg-gray-100 p-4 rounded-md text-gray-800"
                  placeholder="Confirmer le mot de passe"
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  className="absolute right-4 top-4"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye size={20} color="#9ca3af" />
                  ) : (
                    <EyeOff size={20} color="#9ca3af" />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Continue button */}
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-md items-center mb-6"
            onPress={() => {
              onClose();
              router.push("/");
            }}
          >
            <Text className="text-white font-bold text-lg">Continuer</Text>
          </TouchableOpacity>

          {/* Social login options */}
          <View className="mb-6">
            <Text className="text-gray-500 text-center mb-4">
              Ou via les réseaux sociaux
            </Text>
            <View className="flex-row justify-center space-x-4">
              <TouchableOpacity className="flex-1 border border-gray-300 py-3 px-4 rounded-md items-center flex-row justify-center">
                <Text className="text-gray-800 font-medium">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 border border-gray-300 py-3 px-4 rounded-md items-center flex-row justify-center">
                <Text className="text-gray-800 font-medium">Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer links */}
          <View className="flex-row justify-between">
            {isLogin ? (
              <>
                <TouchableOpacity>
                  <Text className="text-green-500">S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-green-500">Mot de passe oublié ?</Text>
                </TouchableOpacity>
              </>
            ) : (
              <View className="w-full flex-row justify-center">
                <Text className="text-gray-600">Déjà un compte ? </Text>
                <TouchableOpacity>
                  <Text className="text-green-500">Se connecter</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}
