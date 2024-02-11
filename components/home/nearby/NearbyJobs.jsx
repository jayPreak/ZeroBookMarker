import React, { useEffect } from 'react'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import styles from './nearbyjobs.style'

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../../../constants'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = ({ books }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Active Books!</Text>
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {books?.map((book, index) => (
          <NearbyJobCard book={book} key={index} />
        ))}
      </View>
    </View>
  )
}

export default Nearbyjobs
