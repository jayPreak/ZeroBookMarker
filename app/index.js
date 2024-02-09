import {
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Text,
  Linking
} from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter, Stack } from 'expo-router'
import MenuDrawer from 'react-native-side-drawer'

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../constants'
import { ScreenHeaderBtn, Welcome } from '../components'

import styles from './index.style'

import * as FileSystem from 'expo-file-system'

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [names, setNames] = useState([])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const readFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'bookmark.txt'
      console.log(fileUri)
      const fileInfo = await FileSystem.getInfoAsync(fileUri)
      if (fileInfo.exists) {
        const content = await FileSystem.readAsStringAsync('fileUri')
        console.log('File content:', content)
      } else {
        console.log('File does not exist')
      }
    } catch (error) {
      console.error('Error reading file:', error)
    }
  }
  useEffect(() => {
    readFile()
  }, [])

  const drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/jayPreak')}
          style={styles.applyBtn}
        >
          <Text style={styles.applyBtnText}>Jayesh Bhushan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/jayesh-bhushan-587616200/'
            )
          }
          style={styles.applyBtn}
        >
          <Text style={styles.applyBtnText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.instagram.com/jaypreak8/')
          }
          style={styles.applyBtn}
        >
          <Text style={styles.applyBtnText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com/jayPreak')}
          style={styles.applyBtn}
        >
          <Text style={styles.applyBtnText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://github.com/jayPreak/ZeroFinder')
          }
          style={styles.applyBtn}
        >
          <Text style={styles.applyBtnText}>Project Repo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOpen} style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>Close</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const onPressSearch = () => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <MenuDrawer
        open={isOpen}
        drawerContent={drawerContent()}
        drawerPercentage={60}
        animationTime={300}
        overlay={true}
        opacity={0.2}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension='60%'
                handlePress={toggleOpen}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerTitle: '  ZeroBookMarker'
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={onPressSearch}
            />
          </View>
        </ScrollView>
      </MenuDrawer>
    </SafeAreaView>
  )
}
export default Home
