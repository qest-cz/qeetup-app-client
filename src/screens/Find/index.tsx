import Constants from 'expo-constants'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput } from 'react-native-paper'

const Find = () => {
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <View style={{ padding: 10, flex: 1, height: '100%' }}>
        <TextInput placeholder="Search for song" mode="outlined" />
      </View>
    </SafeAreaView>
  )
}

export default Find
