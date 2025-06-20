import ActionButton from "@/src/components/ActionButton";
import IconActionButton from "@/src/components/IconActionButton";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [facing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* TOOD : Fix camera behavior when going to previous page then back to camera */}

      <CameraView style={styles.camera} facing={facing}></CameraView>

      <View style={{ flex: 1 }}>
        <Text style={styles.message}>
          Assurez-vous que le QR Code soit dans le champ et bien visible
        </Text>
      </View>
      <ActionButton text="Retour" onPress={() => router.navigate("./page")} />
      <IconActionButton
        text="Retour"
        onPress={() => router.navigate("./page")}
        icon="arrow-left"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 24,
  },
  message: {
    padding: 20,
    textAlign: "center",
    flex: 1,
    paddingBottom: 10,
    fontWeight: "semibold",
    fontSize: 20,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
