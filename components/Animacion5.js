import React, { useState, useEffect }from 'react';
import {StyleSheet, View, Animated } from 'react-native';

const Animacion5 = () => {

    const [ animacion1 ] = useState(new Animated.Value(0));
    const [ animacion2 ] = useState(new Animated.Value(-100));

    useEffect( ( ) => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: 0,
                    duration: 500
                }),
                Animated.timing(animacion1, {
                    toValue: 100,
                    duration: 500
                }),
                Animated.timing(animacion2, {
                 toValue: -100,
                 duration: 500
                }),
                Animated.timing(animacion1, {
                    toValue: 0,
                    duration: 500
                }),
             ])
        ).start();
    },[])

    const estiloAnimacion = {
        transform: [
            {translateY : animacion1},
            {translateX : animacion2}
        ]
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Animated.View style={[styles.caja, estiloAnimacion]} >

            </Animated.View>
        </View>
    )
}

const styles= StyleSheet.create({
    caja:{ 
        width:10,
        height:10,
        backgroundColor:'cornflowerblue'
    }
})

export default Animacion5 ; 