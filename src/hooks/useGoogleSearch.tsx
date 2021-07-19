import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Coords, CreateEventProps, PredictionsType } from '../types/types';
import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_BASE_URL,
} from '../constants/MAPS_KEY';

export const useGoogleSearch = (
  searchTerm: string,
  form: CreateEventProps,
  setFormValue: any
) => {
  const [predictions, setPredictions] = useState<PredictionsType[]>([]);

  useEffect(() => {
    fetchPlaces();
  }, [searchTerm]);

  const onPredictionSelected = async (placeId: string) => {
    try {
      const response = await axios.post(
        `${GOOGLE_MAPS_BASE_URL}/details/json?key=${GOOGLE_MAPS_API_KEY}&placeid=${placeId}`
      );
      if (response) {
        const {
          data: {
            result: {
              geometry: { location },
            },
          },
        } = response;
        setFormValue({
          ...form,
          latitude: location.lat,
          longitude: location.lng,
          location: response.data.result.name,
          generalLocation:
            response.data.result.address_components[3].short_name +
            ', ' +
            response.data.result.address_components[4].short_name,
        });
        setPredictions([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaces = async () => {
    try {
      const response = await axios.post(
        `${GOOGLE_MAPS_BASE_URL}/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${searchTerm}`
      );
      if (response) {
        const {
          data: { predictions },
        } = response;
        setPredictions(predictions);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    predictions,
    onPredictionSelected,
  };
};
