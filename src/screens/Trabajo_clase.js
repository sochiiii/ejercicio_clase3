import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/ejercicio';
import canciones from '../data/canciones';
import series from '../data/series';
import Boton from '../components/Boton';

const Pantalla1 = ({ navigation }) => {
    const informacion = data;
    const cancion = canciones;
    const serie = series;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>BTS</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
            <Text style={styles.title}>Canciones de BTS</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={cancion}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
            <Text style={styles.title}>Kdramas</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={serie}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
            
            

            <Boton
            textoBoton='Ir a creditos'
            accionBoton={irPantalla2}
            />
        </View>
        </ScrollView>
        
    );
};

export default Pantalla1;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',

        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto:{
        marginHorizontal:15
    }
});
