import React, { useState , useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Animated, Text, StyleSheet, View, FlatList, ScrollView, Button, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import Cita from './Cita';
import Formulario from './Formulario';


const Inicio = ( {navigation} ) => {
  //aniamcion
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));
  const [mostrarventana, guardarmMstrarventana] = useState(false);

  const [mostrarform,guardarMostrarform] = useState(false);

  //Definir el state de citas
  const [citas, setCitas] = useState([ ]);
  //Elimina los apcientes del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) =>{
      return citasActuales.filter( cita => cita.id !== id);
    } )
  }
  //Muestra u oculta el form
  const mostrarFormulario = () =>{
    guardarMostrarform(!mostrarform);
  }
  const cerrarTeclado = () =>{
    Keyboard.dismiss();
  }

  //Almacenar citas en storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch (error) {
      console.log(error);
    }
  }

  const [ inputTexto, guardarInputTexto ] = useState('');
  const [ nombreStorage, guardarNombreStorage ] = useState('');
  //animacion
  useEffect(()=>{
    guardarmMstrarventana(false);
    Animated.sequence([
        Animated.timing(animacion1,  {
            toValue:300,
            duration: 1000,
            useNativeDriver: true,
        }),
        Animated.spring( animacion2, {
            toValue:10,
            useNativeDriver: true,
        }),
        
    ]).start(() => {guardarmMstrarventana(true);
                    console.log("termino la aniamcion");});
    
  },[]);
  const estiloAnimacion = {
    transform: [
        { translateY: animacion1 },
        { scale : animacion2}
    ]
  }
  //fin animacion
  useEffect(() => {
    const obtenerCitasStorage = async () => {
        try {
            const citasStorage = await AsyncStorage.getItem('citas');
            if(citasStorage) {
                setCitas(JSON.parse(citasStorage))
            }
        } catch (error) {
            console.log(error);
        }
    }
    obtenerCitasStorage();
  }, []);

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto)
      guardarNombreStorage(inputTexto)
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerDatosStorage = async () =>{
    try {
      const nombre= await AsyncStorage.getItem('nombre');
      guardarNombreStorage(nombre)
    } catch (error) {
      console.log(error);
    }
  }
  const eliminarDatos = async () =>{
    try {
      await AsyncStorage.removeItem('nombre');
      guardarNombreStorage('')
    } catch (error) {
      console.log(error);
    }
  }

  const irNosotros = () =>{
    navigation.navigate('Saludo',citas)
  }

  return (
    <>
        
            {mostrarventana ? (
            <TouchableWithoutFeedback onPress={() => cerrarTeclado() } >
              <View style={styles.contenedor}>
                <Text style={styles.titulo}> Administracion de Administrados </Text>
                <View style= {styles.formulario}>
                        <Button
                        onPress={ () => {
                            mostrarFormulario();                     
                        }}
                            title = {mostrarform ? ("Mostrar Listado"  ) : ("Crear Nuevo Paciente")}    
                        />
                    </View>
                <View style={styles.contenido}>
                  {mostrarform ? (
                    <>
                    <Text style= {styles.titulo}> Crear nueva cita </Text>
                    <Formulario
                      citas = {citas}
                      setCitas={setCitas}
                      guardarMostrarform = {guardarMostrarform}
                      guardarCitasStorage = {guardarCitasStorage}
                    />
                    </>
                  ):(
                    <>
                    <Text style={styles.titulo}> {citas.length > 0 ? 'Listado': 'No hay na pa administrar'} </Text>
                    
                      <FlatList
                        style={styles.listado}
                        data = {citas}
                        renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} /> }
                        keyExtractor={ cita => cita.id}
                        //FlatList da una ganacia en performace renderiza solo las visibles en pantalla
                      />
                    
                    </>
                  )}
                  
                </View>
              </View>
            </TouchableWithoutFeedback>
          ) : (<Animated.View
            style={[styles.caja, estiloAnimacion]}
          >
          </Animated.View>)}  

                
    </>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#AADDFF',
    flex: 1
    // flex crece por todo el espacio disponible 
  },
  titulo: {
    color: '#000000',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center'
  },
  contenido:{
    flex: 1,
    marginHorizontal: '4.5%',
  },
  listado:{
    flex:1,
    
  },
  formulario:{
    paddingHorizontal: 20,
    paddingVertical:10,
    marginHorizontal:'2.5%'
  },
  caja:{
    //width: 100,
    height: 100,
    backgroundColor: '#AADDFF'
  }

});

export default Inicio;