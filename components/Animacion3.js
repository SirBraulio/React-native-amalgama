import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';



const Animacion2 = () => {
    
    const [ animacion ] = useState(new Animated.Value(0) );

    useEffect(()=>{
        Animated.timing(
            animacion, {
                toValue: 50, // al valor que llega
                duration: 1500 // cantidad de tiempo en llegar (1/2 segundo)
            }
        ).start(); // Iniciar la animacion
    }, [])

    const [ spinValue ] = useState(new Animated.Value(0) );

    useEffect(()=>{
        Animated.timing(
            spinValue, {
                toValue: 1, // al valor que llega
                duration: 1500 // cantidad de tiempo en llegar (1/2 segundo)
            }
        ).start(); // Iniciar la animacion
    }, [])

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '36000000deg']
      })

    return( 
        <Animated.View style= {{transform: [{rotate: spin}]}}> 
            <Animated.Text style={[styles.texto,{fontSize: animacion}]}>Vicente Weko </Animated.Text>
        </Animated.View>
        
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
        //transform: [{rotate: '90deg'}]
        
    },
    vista:{
        flexDirection: 'column'
    }

})

export default Animacion2;