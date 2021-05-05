import React, { useState, useEffect }from 'react';
import {StyleSheet, View, Animated, Text } from 'react-native';

const Animacion6 = () =>{

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
        ]).start(() => {
            console.log("termino la aniamcion")});
    },[]);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion1 },
            { scale : animacion2}
        ]
    }
    
    return(
        <View>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            >
                

            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    caja:{
        width: 100,
        height: 100,
        backgroundColor: '#900C0C',
        borderRadius: 100,
        alignItems: 'flex-end'
    }
})

export default Animacion6;