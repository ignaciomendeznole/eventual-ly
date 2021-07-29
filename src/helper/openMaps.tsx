import { Linking, Platform } from 'react-native';

export const openNativeMaps = (lat: number, lng: number) => {
  const daddr: string = `${lat},${lng}`;
  const app: string = Platform.OS === 'ios' ? 'apple' : 'google';
  Linking.openURL(`http://maps.${app}.com/maps?daddr=${daddr}`);
};
