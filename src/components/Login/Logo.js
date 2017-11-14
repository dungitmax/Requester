import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import images from "../images";


export default class Logo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image source={images.logo1} style={styles.image}/>
                <Text style={styles.text}>911 INTERPRETER</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
       width:200,
        height:30,
        resizeMode:'stretch',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 4,
    }
});
