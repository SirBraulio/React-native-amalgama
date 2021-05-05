import React,{ useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, ScrollView, Alert, Animated ,SegmentedControlIOSBase} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';


const Formulario = ({citas,setCitas, guardarMostrarform, guardarCitasStorage}) => {

    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [sintomas, guardarSintomas] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = {year: 'numeric', month:'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES',opciones));
        //console.warn("La Fecha fue seleccionada con exito: ", date.toLocaleDateString('es-ES',opciones));
        hideDatePicker();
    };
    //Muestra o oculta el timepicker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const confirmarHora = (hora) => {
        const opciones = {hour: 'numeric', minute:'2-digit', hour12: false};
        //console.log(hora.toLocaleString('es-ES',opciones));
        guardarHora(hora.toLocaleString('es-ES',opciones));
        //console.warn("La hora fue seleccionada con exito: ", hora.toLocaleString('es-ES',opciones));
        hideTimePicker();
    };
    // Crear New cita

    const crearNuevaCita = () => {
        //Validar
        if(paciente.trim() === ''||
            propietario.trim() === ''||
            telefono.trim() === ''||
            sintomas.trim() === ''|| 
            fecha.trim() === ''||
            hora.trim() === '')
            {
                //falla la validacion
                mostrarAlerta();
                return;
            }
         // Creamos una nueva cita
         const cita = { paciente, propietario, telefono, sintomas, fecha, hora}
         cita.id = shortid.generate();

        
        // console.log(cita);
        //agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        //pasar las nuevas citas al storage
        guardarCitasStorage(JSON.stringify(citasNuevo))

        // Ocultar formulario
        guardarMostrarform(false);
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Titulo
            ' Todos los campos son obligatorios.', // cuerpo
            [{
                text: 'OK' //arreglo de botones
            }]
        )
    }
    
    return(
        <>
        
        <ScrollView>
            <View style= {[styles.formulario, styles.top]}>
                <View>
                    <Text style = {styles.label}> Paciente:</Text>
                    <TextInput 
                        style = {styles.input}
                        onChangeText={texto => {guardarPaciente(texto);}}
                    />
                </View>
            </View>
            <View style= {styles.formulario}>
                <View>
                    <Text style = {styles.label}> propietario:</Text>
                    <TextInput 
                        style = {styles.input}
                        onChangeText={texto => guardarPropietario(texto)}
                    />
                </View>
            </View>
            <View style= {styles.formulario}>
                <View>
                    <Text style = {styles.label}> Telefono contacto:</Text>
                    <TextInput 
                        style = {styles.input}
                        onChangeText={texto => guardarTelefono(texto)}
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <View style= {styles.formulario}>
            <Text style={styles.label}>Fecha :</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker} 
                        locale='es_ES'

                    />
                    <Text>{fecha}</Text>
            </View>

            <View style= {styles.formulario}>
                <Text style={styles.label}>Hora :</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker} 
                        locale='es_ES'
                        is24Hour
                        //este prop setea el horario a 23hrs y quita el am/pm

                    />
                    <Text>{hora}</Text>
            </View>

            <View style= {[styles.formulario, styles.bottom]}>
                <View>
                    <Text style = {styles.label}> Sintomas:</Text>
                    <TextInput 
                        multiline
                        style = {styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                        //keyboardType=''
                        
                    />
                </View>
            </View>                   
            <View style= {[styles.view]}>
                <Button
                 onPress={ () => {
                     crearNuevaCita();                     
                 }}
                    title = "Agregar"
                    
                />
            </View>
            
        </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    
    formulario:{
        backgroundColor:'#0C6490',
        paddingHorizontal: 20,
        paddingVertical:30,
        marginHorizontal:'2.5%',
        //marginBottom: 10,
        flex: 1,
        //borderRadius: 10
        
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        margin: 0
    },
    input:{
        marginTop: 10,
        height: 35,
        borderBottomColor: '#e1e1e1',
        borderWidth: 1,
        backgroundColor:'#FFF',
        borderRadius: 10,
        //borderStyle: ''
    },
    view:{
        marginTop: 20,
        marginBottom: 100
    },
    top: {
        //flex: 0.3,
        //backgroundColor: "grey",
        //borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottom: {
        //flex: 0.3,
        //backgroundColor: "pink",
        //borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
})

export default Formulario;