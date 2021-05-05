import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Button } from 'react-native';
const Cita = ({item, eliminarPaciente}) => {
    const dialogoEliminar = id => {
        console.log("Eliminando...", id);
        eliminarPaciente(id)
    }
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>propietario:</Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>sintomas:</Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <Button
                 onPress={ () => {
                     dialogoEliminar(item.id);
                     alert('Borrando...');
                     
                 }}
                    title = "x Eliminar"
                    color = "red"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    /*<TouchableHighlight onPress={ () => {alert('Maldicion apretaste el boton');dialogoEliminar(item.id)} } style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}> Eliminar &times;</Text>
                </TouchableHighlight>*/
    cita: {
        backgroundColor:'#0C6490',
        paddingHorizontal: 20,
        paddingVertical:30,
        marginHorizontal:'2.5%',
        //paddingVertical le da el paddin arriba y abajo 
        borderRadius: 20,
        marginBottom: 10
        //paddingHorizontal le da el mismo valor a la izq y a la der
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 0
        
    },
    texto: {
        fontSize: 18,
        color: "#000000"
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical:10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight:'bold',
        textAlign:'center'
    }

})
export default Cita;
