import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {URL_SHEDULE} from "../components/const";

export default class HistorySchedule extends Component {
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
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1}}>History Schedule</Text>
            </View>
        )
    }
}