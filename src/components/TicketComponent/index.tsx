import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import { Ticket } from '../../types/types';

interface TicketProps {
  ticket: Ticket;
}

export const TicketComponent = ({ ticket }: TicketProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.ticketHeaderContainer}>
        <ImageBackground
          style={styles.imagePoster}
          source={{
            uri: ticket.backdropImage,
          }}
          imageStyle={styles.image}
        >
          <Text style={styles.posterText}> {ticket.name} </Text>
        </ImageBackground>
      </View>
      <View style={{ padding: 20, marginHorizontal: 5 }}>
        {/* Event Information */}
        <View style={styles.infoContainer}>
          {/* Location icon and location */}
          <Ionicons name='location-sharp' size={24} color={'gray'} />
          <Text style={styles.locationText}>{ticket.location}</Text>
        </View>
        <View style={styles.extraInformationContainer}>
          {/* other information */}
          <View style={styles.iconsContainer}>
            {/* Calendar and text */}
            <Ionicons name='calendar-sharp' size={24} color={'gray'} />
            <Text style={styles.text}>{ticket.date}</Text>
          </View>

          <View style={styles.iconsContainer}>
            {/* price tag and text */}
            <Ionicons name='pricetag' size={24} color={'gray'} />
            <Text style={styles.text}> {ticket.priceTag}</Text>
          </View>
        </View>
      </View>
      <View style={styles.separatorContainer}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index: number) => {
          return <View key={index} style={styles.lines} />;
        })}
      </View>

      <View style={styles.qrContainer}>
        {/* QR CODE */}
        <QRCode value={ticket.ticketLink} size={180} />
      </View>
    </View>
  );
};
