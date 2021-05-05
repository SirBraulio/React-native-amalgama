import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SoundPlayer from 'react-native-sound-player';



const Audios = () => {
  
  const reproducir = () =>{
    try {
      SoundPlayer.playSoundFile('risa','mp3')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style = {styles.contenedor}>
      <Button
        title = "Aprietame"
        onPress= { () =>  reproducir() }
        color = 'red'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
}
});

export default Audios;
