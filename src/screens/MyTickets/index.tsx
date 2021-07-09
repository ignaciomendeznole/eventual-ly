import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View } from 'react-native';
import { tickets } from '../../constants/TicketDummy';
import { TicketComponent } from '../../components/TicketComponent';
import styles from './styles';
import { Ticket } from '../../types/types';

export const MyTickets = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Carousel
        data={tickets}
        keyExtractor={(item: Ticket) => item.id}
        renderItem={({ item }) => <TicketComponent ticket={item} />}
        sliderWidth={width}
        itemWidth={width - 40}
      />
    </View>
  );
};
