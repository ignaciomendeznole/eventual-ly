import { useEffect, useState } from 'react';
import axios from 'axios';
import { Event, PredictionsType } from '../types/types';
import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_BASE_URL,
} from '../constants/MAPS_KEY';
import { GooglePlacesResponse } from '../types/GooglePlaces';

export const useGoogleSearch = (
  searchTerm: string,
  form: Event,
  setFormValue: any
) => {
  const [predictions, setPredictions] = useState<PredictionsType[]>([]);

  useEffect(() => {
    fetchPlaces();
  }, [searchTerm]);

  const onPredictionSelected = async (placeId: string) => {
    try {
      const response = await axios.post<GooglePlacesResponse>(
        `${GOOGLE_MAPS_BASE_URL}/details/json?key=${GOOGLE_MAPS_API_KEY}&placeid=${placeId}`
      );
      if (response) {
        const { data } = response;
        setFormValue({
          ...form,
          location: data.result,
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
