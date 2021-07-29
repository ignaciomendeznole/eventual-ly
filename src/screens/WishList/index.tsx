import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { WishListComponent } from '../../components/WishListCard';
import { removeFromWishList } from '../../store/actions/eventActions';
import { AppState } from '../../store/reducers';
import { Event, Props } from '../../types/types';
import styles from './styles';

export const WishList: React.FC<Props> = ({ navigation }) => {
  const { wishList } = useSelector((state: AppState) => state.eventsReducer);
  const dispatch = useDispatch();
  const removeEventFromWishList = (event: Event) => {
    dispatch(removeFromWishList(event));
  };
  const moveToEventDetails = (event: Event) => {
    navigation.navigate('EventDetails', { event });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.companyTitle}>Eventual.ly</Text>
        <Text style={styles.screenTitle}>Your WishList</Text>
      </View>
      {wishList.length === 0 ? (
        <View style={styles.emptyWishListContainer}>
          <Text style={styles.emptyWishList}>
            You have no events on your WishList
          </Text>
          <Text style={{ ...styles.emptyWishList, marginTop: 15 }}>:(</Text>
        </View>
      ) : (
        <FlatList
          data={wishList}
          keyExtractor={(item: Event) => item._id!}
          renderItem={({ item }) => (
            <WishListComponent
              event={item}
              onPress={() => moveToEventDetails(item)}
              removeEventFromWishList={removeEventFromWishList}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
