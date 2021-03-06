import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '../constants/MAPS_KEY';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { GeocodingResponse } from '../types/geocoding';
import { useDispatch } from 'react-redux';
import { finishLoadingAction, loadingAction } from '../store/actions/uiActions';

/**
 * Custom Hook used for requesting the user's current location alongside with Geocode API.
 * @returns User current location
 */
export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<GeocodingResponse>();
  const dispatch = useDispatch();

  /**
   * Gets the user geolocation.
   */
  const getUserLocation = async () => {
    dispatch(loadingAction());
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      getLocationInformation(coords.latitude, coords.longitude);
      dispatch(finishLoadingAction());
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Translates the user's geolocation and gets the current location information of the user based on his coordinates.
   * @param latitude of the user
   * @param longitude of the user
   */
  const getLocationInformation = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const { data } = await axios.get<GeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      setCurrentLocation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  return {
    currentLocation,
    getUserLocation,
  };
};
