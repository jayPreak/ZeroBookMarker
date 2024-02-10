import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ book }) => {
  console.log('book:', book)
  return (
    <TouchableOpacity style={styles.container} onPress=''>
      {/* <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://i.imgur.com/h2BVQvK.png"
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity> */}

      {/* <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text> */}

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
