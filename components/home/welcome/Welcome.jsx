import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../../../constants'

const jobTypes = [
  'Full-Time',
  'Part-Time',
  'Internship',
  'Freelance',
  'Contractor'
]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Jayesh</Text>
        <Text style={styles.welcomeMessage}>Write the page number :D</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={term => setSearchTerm(term)}
            placeholder='What page are you on?'
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.heart}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
