import Constants from 'expo-constants'
import { launchCameraAsync, MediaTypeOptions } from 'expo-image-picker'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Find = () => {
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <View style={{ padding: 10, flex: 1, height: '100%' }}>
        <TextInput placeholder="Search for song" mode="outlined" />
        <Button
          onPress={() =>
            launchCameraAsync({
              mediaTypes: MediaTypeOptions.Videos,
            })
          }
        >
          Open Camera
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Find
