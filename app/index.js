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
import { createFile, readFile, writeFile, deleteFileContents } from '../utils'

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../constants'
import { NearbyJobs, ScreenHeaderBtn, Welcome } from '../components'

import styles from './index.style'

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [reload, setReload] = useState(false)

  const [pageNo, setPageNo] = useState([])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const fetchData = async () => {
    await createFile()
    const content = await readFile()
    console.log('Content:', content)
    setPageNo(content)
  }

  useEffect(() => {
    fetchData()
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
            Linking.openURL('https://github.com/jayPreak/ZeroBookMarker')
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
    writeFile(searchTerm)
    fetchData()
    if (searchTerm) {
      router.push(`/search/${searchTerm}`)
    }
  }

  const reloadPress = () => {
    fetchData()
    setReload(!reload)
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
            {/* <TouchableOpacity onPress={reloadPress}>
              <Text style={styles.shitBtn}>R</Text>
            </TouchableOpacity> */}
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={onPressSearch}
            />
            <NearbyJobs books={pageNo} />
          </View>
        </ScrollView>
      </MenuDrawer>
    </SafeAreaView>
  )
}
export default Home
