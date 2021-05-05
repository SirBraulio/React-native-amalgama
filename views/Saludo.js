import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View,Button,Animated} from 'react-native'


const Saludo = ( {navigation} ) =>{

    //Animacion
    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(1));
    const [mostrarventana, guardarmMstrarventana] = useState(false);
    
    useEffect(()=>{
        Animated.sequence([
            Animated.timing(animacion1,  {
                toValue:150,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring( animacion2, {
                toValue:15,
                useNativeDriver: true,
            }),
            /*Animated.spring( animacion2, {
                toValue:1
            }),
            Animated.timing(animacion1,  {
                toValue:600,
                duration: 1000
            }),*/
        ]).start(() => {guardarmMstrarventana(true);
                    console.log("termino la aniamcion");});
    },[]);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion1 },
            { scale : animacion2}
        ]
    }

    const visitarInicio = () => {
        //navigate tambien se lleva la info en forma de objeto
        
        navigation.navigate('Inicio')
    }

    const visitarReproductor = () => {
        navigation.navigate('Reproductor')
    }
    const visitarAnimacion = () => {
        navigation.navigate('Animacion1')
    }

    return(
        <>
            {mostrarventana ? (
                <>
                    <View style={styles.fondo} >
                        <View style={{alignItems:"center"}} >
                            <Text style={styles.txt}>Te presento mis dominios</Text>
                        </View>
                        <View >
                            <View style={styles.btn} >
                                <Button
                                    title= "Ir a Formulario"
                                    onPress={ () => visitarInicio() }
                                            
                                />
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    style={styles.btn}
                                    title= "Ir a Reproductor"
                                    onPress={ () => visitarReproductor() }
                                                    
                                />
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    style={styles.btn}
                                    title= "Ir a A1"
                                    onPress={ () => visitarAnimacion() }
                                            
                                />
                            </View>
                        </View>
                    </View>
                </>
            ):(
                <Animated.View
                    style={[styles.caja, estiloAnimacion]}
                >
                </Animated.View>
            )}
            
        </>
        
    );
}

const styles= StyleSheet.create({
    contenedor:{
        //flex:1,
        alignItems: 'stretch',
        justifyContent:'center',
        
    },
    btn:{
        alignItems: 'stretch',
        marginBottom: 20,
        marginTop: 10,
        
    },
    txt:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 0
    },
    caja:{
        width: 100,
        height: 100,
        backgroundColor: '#AADDFF',
        borderRadius: 100,
        alignItems: 'flex-end'
    },
    fondo:{
        backgroundColor: '#AADDFF',
        flex: 1
    }
    

})

export default Saludo;