import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';



const Animacion1 = () => {
    
    const [ animacion ] = useState(new Animated.Value(0) );

    useEffect(()=>{
        Animated.timing(
            animacion, {
                toValue: 1, // al valor que llega
                duration: 6500 // cantidad de tiempo en llegar (1/2 segundo)
            }
        ).start(); // Iniciar la animacion
    }, [])

    return( 
        <Animated.View
            style= {{opacity: animacion}}
            
            >
            <Text style={styles.texto}>Vicente weko </Text>
        </Animated.View>
        
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }

})

export default Animacion1;