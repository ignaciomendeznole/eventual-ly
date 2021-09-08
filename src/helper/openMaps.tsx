import { Linking, Platform } from 'react-native';

/**
 * Opens the native maps app with the event location.
 * @param lat Latitude of the event
 * @param lng Longitude of the event
 */
export const openNativeMaps = (lat: number, lng: number) => {
  const daddr: string = `${lat},${lng}`;
  const app: string = Platform.OS === 'ios' ? 'apple' : 'google';
  Linking.openURL(`http://maps.${app}.com/maps?daddr=${daddr}`);
};
