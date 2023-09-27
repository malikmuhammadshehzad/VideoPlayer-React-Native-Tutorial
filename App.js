import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-video-player'
const App = () => {
  return (
    <>  
    <VideoPlayer
    video={require('./assets/Topg.mp4')}
    videoWidth={1600}
    videoHeight={900}
    thumbnail={require('./assets/tate.jpeg')}
    autoplay={true}
/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
  
      <Text style={{ marginTop: 10, color: "black", fontSize: 50, fontWeight: "bold" }} >
        Video Player
      </Text>
      <Text style={{ marginTop: 10, color: "black", fontSize: 50, fontWeight: "bold" }} >
        In
      </Text>
      <Text style={{ marginTop: 8, color: "black", fontSize: 50, fontWeight: "bold" }} >
        React Native
      </Text>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})