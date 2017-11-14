import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    NativeModules, ActivityIndicator, Button,
} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {URL_SHEDULE} from "../components/const";

export default class MySchedule extends Component {
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            headerLeft:
                <TouchableOpacity onPress={() => {
                    navigation.navigate('DrawerOpen')
                }}>
                    <Icon name="user-circle" size={30} style={{marginLeft: 7}}/>
                </TouchableOpacity>
        }

    };


    render() {
        return (
            <View>
                <Text>My</Text>
            </View>

        );
    }
}