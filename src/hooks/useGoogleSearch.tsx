import { useEffect, useState } from 'react';
import axios from 'axios';
import { Event, PredictionsType } from '../types/types';
import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_BASE_URL,
} from '../constants/MAPS_KEY';
import { GooglePlacesResponse } from '../types/GooglePlaces';

/**
 * Custom Hook for managing Google Places Autocomplete Results
 * @param searchTerm User input for google search.
 * @param form event form.
 * @param setFormValue method used for setting an event form value.
 * @returns Places that match the search criteria
 */
export const useGoogleSearch = (
  searchTerm: string,
  form: Event,
  setFormValue: any
) => {
  const [predictions, setPredictions] = useState<PredictionsType[]>([]);

  useEffect(() => {
    fetchPlaces();
  }, [searchTerm]);

  /**
   * Gets a place full information using Places API Details.
   * @param placeId used for getting the selected place information
   */
  const onPredictionSelected = async (placeId: string) => {
    try {
      const response = await axios.post<GooglePlacesResponse>(
        `${GOOGLE_MAPS_BASE_URL}/details/json?key=${GOOGLE_MAPS_API_KEY}&placeid=${placeId}`
      );
      if (response) {
        const {
          data: { result },
        } = response;
        setFormValue({
          ...form,
          location: result,
        });
        setPredictions([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Fetches places that match the searching criteria using Google Places Autocomplete API.
   */
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
