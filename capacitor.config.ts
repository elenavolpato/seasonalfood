import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.raposinha.seasonalfood",
  appName: "Seasonal Food",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https",
    allowNavigation: ["*"],
  },
  android: {
    path: "./android",
    allowMixedContent: true,
    captureInput: true,
  },
};

export default config;
