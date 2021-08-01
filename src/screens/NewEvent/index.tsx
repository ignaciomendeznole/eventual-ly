import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import { useGoogleSearch } from '../../hooks/useGoogleSearch';
import { LocationPrediction } from '../../components/LocationPrediction';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { createNewEvent } from '../../store/actions/eventActions';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { Event, Props } from '../../types/types';
import { cloudinaryImageUpload } from '../../helper/getImageURL';
import {
  finishLoadingAction,
  loadingAction,
} from '../../store/actions/uiActions';
import { LoadingImage } from '../../components/LoadingImage';

export const NewEventScreen: React.FC<Props> = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const { uid } = useSelector((state: AppState) => state.authReducer);
  const { isLoading } = useSelector((state: AppState) => state.uiReducer);
  const dispatch = useDispatch();

  const { onChangeField, form, setFormValue } = useForm<Event>({
    name: '',
    date: '',
    description: '',
    location: null,
    price: 0,
    backdropImage: '',
    owner: uid,
  });
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const { predictions, onPredictionSelected } = useGoogleSearch(
    searchInput,
    form,
    setFormValue
  );

  const onSubmitForm = () => {
    dispatch(createNewEvent(form));
    navigation.goBack();
  };

  const chooseImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    dispatch(loadingAction());
    if (!result.cancelled) {
      const uri = await cloudinaryImageUpload(result);

      setFormValue({
        ...form,
        backdropImage: uri,
      });
      dispatch(finishLoadingAction());
    } else {
      setFormValue({
        ...form,
        backdropImage: '',
      });
    }
  };

  const onChangeDate = (e: any, dateParam: Date) => {
    setFormValue({
      ...form,
      date: new Date(dateParam.getTime()).toLocaleString(),
    });
    setDateValue(new Date(dateParam.getTime()));
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.companyTitle}>Eventual.ly</Text>
          <Text style={styles.screenTitle}>New Event</Text>
          <Text style={styles.screenDescription}>
            Please fill the following fields to publish your own event.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.topInputFieldsContainer}>
            <View style={styles.eventNameInput}>
              <TextInput
                style={styles.textInput}
                placeholder='Event Name'
                onChangeText={(text: string) => onChangeField(text, 'name')}
                returnKeyType='done'
              />
            </View>
            <View style={styles.eventDateInput}>
              <DateTimePicker
                testID='dateTimePicker'
                value={dateValue}
                mode='datetime'
                display='default'
                onChange={(e: any, date: any) => onChangeDate(e, date)}
              />
            </View>
          </View>
          <View style={styles.locationInputContainer}>
            <TextInput
              placeholder='Choose the event location'
              onChangeText={(text: string) => {
                setSearchInput(text);
              }}
              style={styles.textInput}
              returnKeyType='done'
            />
            {predictions.length !== 0 && (
              <View style={styles.predictionsContainer}>
                <FlatList
                  data={predictions}
                  keyExtractor={(item) => item.place_id}
                  renderItem={({ item }) => (
                    <LocationPrediction
                      prediction={item}
                      onSelectPrediction={() => {
                        onPredictionSelected(item.place_id);
                      }}
                    />
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.predictionSeparator} />
                  )}
                />
              </View>
            )}
          </View>
          {!isLoading && (
            <TouchableOpacity
              style={styles.plusIcon}
              activeOpacity={!isLoading ? 0.6 : 0}
              onPress={onSubmitForm}
            >
              <AntDesign
                name='pluscircle'
                size={36}
                color={colors.GREENPALETTE}
              />
            </TouchableOpacity>
          )}

          {form.location?.address_components[0].short_name && (
            <View style={styles.selectedLocationContainer}>
              <Text style={styles.locationIndicator}>Event Location: </Text>
              <Text style={styles.locationText}>
                {form.location.address_components[0].short_name}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.uploadPhotoButton}
            activeOpacity={0.8}
            onPress={chooseImageFromGallery}
          >
            <Text style={styles.buttonText}>Choose an Image</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {form.backdropImage !== '' && !isLoading ? (
              <Image
                source={{
                  uri: form.backdropImage,
                }}
                style={styles.image}
              />
            ) : (
              isLoading && <LoadingImage />
            )}
          </View>
        </View>
        <TextInput
          placeholder='Choose the event price'
          onChangeText={(text: string) => {
            onChangeField(text, 'price');
          }}
          style={styles.priceInputContainer}
          keyboardType='numeric'
          returnKeyType='done'
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
