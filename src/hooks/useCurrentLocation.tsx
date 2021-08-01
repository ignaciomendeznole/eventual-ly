import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '../constants/MAPS_KEY';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { GeocodingResponse } from '../types/geocoding';
import { useDispatch } from 'react-redux';
import { finishLoadingAction, loadingAction } from '../store/actions/uiActions';

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<GeocodingResponse>();
  const dispatch = useDispatch();

  const getUserLocation = async () => {
    dispatch(loadingAction());
    try {
      const response = await Location.getCurrentPositionAsync({});
      getLocationInformation(
        response.coords.latitude,
        response.coords.longitude
      );
      dispatch(finishLoadingAction());
    } catch (error) {
      console.log(error);
    }
  };
  const getLocationInformation = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const response = await axios.get<GeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      setCurrentLocation(response.data);
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
