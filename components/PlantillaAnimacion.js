import React, { useState, useEffect }from 'react';
import {StyleSheet, View, Animated } from 'react-native';

const Animacion6 = () =>{

    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(1));

    useEffect(()=>{
        Animated.sequence([

        ]).start();
    },[]);

    const estiloAnimacion = {

    }
    
    return(
        <View>
            <View
                style={[atyles.caja, estiloAnimacion]}
            >


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    caja:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion6;