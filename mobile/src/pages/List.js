import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, AsyncStorage, Image } from 'react-native';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList.js';

export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(Storagetechs => {
            const techsArray = Storagetechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    },[]);
    return(
        <SafeAreaView style={styles.container}>
            <Image style = {styles.logo} source={logo} />
            <ScrollView>
                {
                    techs.map(tech => <SpotList key ={tech} tech= {tech} />)
                }
            </ScrollView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28

    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10

    }
});