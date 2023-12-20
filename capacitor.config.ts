import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'KGQT',
  appName: 'KGQT',
  webDir: 'www',
  server: {
    hostname:'localhost',
    androidScheme: 'https',
    cleartext: true,
  }
};

export default config;
