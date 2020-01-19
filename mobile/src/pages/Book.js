import React, {useState} from 'react';
import { Text, AsyncStorage, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import api from '../services/api';

export default function Book({ navigation }){
    const [ date, setDate ] = useState('');
    const id = navigation.getParam('id');
    

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');
        console.log(date);
        await api.post(`/spots/${id}/bookings`, { 
            date
        }, {
            headers: { user_id }
        })
       
        Alert.alert ("solicitação de reserva enviada")
        navigation.navigate('List');
        
    }

    function handleCancel(){
        navigation.navigate('List');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={text => setDate(text)}
            />
            <TouchableOpacity onPress = {handleSubmit}style={styles.buttom}>
                <Text style={styles.buttomText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {handleCancel}style={[styles.buttom, styles.cancelButtom]}>
                <Text style={styles.buttomText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        top: 50,
        margin: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1, 
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    buttom: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 2
    },
    cancelButtom: {
        backgroundColor: "#ccc",
        marginTop: 10
    },
    buttomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})