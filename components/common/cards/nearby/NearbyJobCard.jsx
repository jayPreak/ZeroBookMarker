import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'
import { useRouter } from 'expo-router'
const NearbyJobCard = ({ book }) => {
  const router = useRouter()
  const onPress = () => {
    if (book.name) {
      router.push(`/search/${book.name}`)
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {book.name}
        </Text>
        <Text style={styles.jobType}>{book.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
