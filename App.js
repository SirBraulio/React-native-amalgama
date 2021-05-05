import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, Button, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import Cita from './views/Cita';
import Formulario from './views/Formulario';
import Inicio from './views/Inicio';
import Saludo from './views/Saludo';

// React NAvigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SoundPlayer //  npm install --save react-native-sound-player
import SoundPlayer from 'react-native-sound-player';
import Audios from './views/Audios';

//Animaciones
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';
import Animacion6 from './components/Animacion6';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          
          //pdoemos usar screenOptions={{ lo mismo del options de abajo para asi aplicarlo a todas las pantallas }}
        >
          <Stack.Screen
            name= "Saludo"
            component={Saludo}
            options= {{
              //modifica la parte de arriba
              title: "Well venido",
              headerStyle:{ backgroundColor: '#F4511E'},
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontWeight: 'bold'}
            }}
          />
          <Stack.Screen
            name= "Inicio"
            component={Inicio}
            options= {{
              //modifica la parte de arriba
              title: "Formulario",
              headerStyle:{ backgroundColor: '#F4511E'},
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontWeight: 'bold'}
            }}
          />
          <Stack.Screen
            name= "Reproductor"
            component={Audios}
            options= {{
              //modifica la parte de arriba
              title: "Audios",
              headerStyle:{ backgroundColor: '#F4511E'},
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontWeight: 'bold'}
            }}
          />
          <Stack.Screen
            name= "Animacion1"
            component={Animacion6}
            options= {{
              //modifica la parte de arriba
              title: "A1",
              headerStyle:{ backgroundColor: '#F4511E'},
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontWeight: 'bold'}
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;