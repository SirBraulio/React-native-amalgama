import React, { useState } from 'react';
import { StyleSheet, Text, Animated, View, TouchableWithoutFeedback } from 'react-native';

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring( animacion, {
            toValue: .7,
            useNativeDriver: true,
        }).start();
    }
    const soltarBtn = () => {
        Animated.spring( animacion, {
            toValue: 1,
            friction: 3, // mas bajo + rebote + alto menos rebote
            tension: 30,
            useNativeDriver: true,
        }).start();
    }

    const estiloAnimacion = {
        transform: [{scale: animacion}]
    }

    return (
        <View style= {styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltarBtn() }

            >
                <Animated.View   style={[ styles.btn, estiloAnimacion ]}>
                    <Text style={styles.texto}>Iniciar Sesion</Text>
                </Animated.View>               
            </TouchableWithoutFeedback>
        </View>
        
    );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:'center'
    },
    btn:{
        backgroundColor:'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems:'center'
    },
    texto:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})

export default Animacion4;