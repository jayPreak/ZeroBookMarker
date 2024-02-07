import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const JobSearch = () => {
  const params = useGlobalSearchParams()
  const router = useRouter()

  const [searchResult, setSearchResult] = useState([])
  const [page, setPage] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: ''
        }}
      />
      <View style={{ padding: SIZES.medium, rowGap: SIZES.medium }}>
        <View style={styles.container}>
          <Text style={styles.searchTitle}>{params.id}</Text>
          <Text style={styles.noOfSearchedJobs}>
            Page Number you are at {page}
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={page}
              onChangeText={page => setPage(page)}
              placeholder='Which page number are you at?'
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress=''>
            <Image
              source={icons.chevronRight}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default JobSearch
