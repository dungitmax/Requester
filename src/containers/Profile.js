import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
    Image

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {default as IconFontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as IconMat} from 'react-native-vector-icons/MaterialCommunityIcons';
import images from "../components/images";
import {URL_ACOUNT} from "../components/const";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            account: ''

        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token').then((value) => {
            console.log(value);
            fetch(URL_ACOUNT, {
                method: "GET",
                headers: {
                    'Authorization': value,
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData)
                    this.setState({
                        account: responseData
                    })

                })
                .done();

        });
    }

    onLogout() {
        AsyncStorage.removeItem('token');
        const {navigate} = this.props.navigation;
        navigate('Login');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Image style={styles.picture} source={images.infoprofile}>
                    <Image style={styles.imageProfile} source={images.profile}>

                    </Image>
                    <Text style={{
                        marginLeft: 20,
                        marginTop: 20,
                        color: 'white'
                    }}>{this.state.account.login} {this.state.account.firstName}</Text>
                    <Text style={{marginLeft: 20, color: 'white'}}>{this.state.account.email}</Text>
                </Image>
                <View style={{flex: 3}}>
                    <TouchableOpacity
                        onPress={() => navigate('InfoProfile', {dataAccount: this.state.account})}
                    >
                        <View style={styles.infoContainer}>
                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <IconFontAwesome name="user-circle" size={25} style={{marginLeft: 5}}/>
                            </View>
                            <View style={{flex: 9, marginLeft: 13}}>
                                <Text>Account Info</Text>
                                <Text>{this.state.account.login} {this.state.account.firstName}</Text>
                                <Text>({this.state.account.email})</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 10}}/>
                    <View style={styles.infoContainer}>
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                            <IconMat name="comment-alert" size={25} style={{marginLeft: 5}}/>
                        </View>
                        <View style={{flex: 9, marginLeft: 13}}>
                            <Text>Contact Interpreter</Text>
                            <Text>Get support or send feedback</Text>
                        </View>

                    </View>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>
                    <View style={styles.infoContainer}>
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                            <Icon name="ios-information-circle-outline" size={25} style={{marginLeft: 5}}/>
                        </View>
                        <View style={{flex: 9, marginLeft: 13}}>
                            <Text>About 911 Interpreter</Text>
                            <Text>Version</Text>
                        </View>

                    </View>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>
                    <TouchableOpacity
                        onPress={this.onLogout.bind(this)}
                    >
                        <View style={styles.infoContainer}>
                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <IconFontAwesome name="sign-out" size={25} style={{marginLeft: 5}}/>
                            </View>
                            <View style={{flex: 9, marginLeft: 13}}>
                                <Text>Sign Out</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>

                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    viewHeader: {
        flex: 1,

    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 5,

    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    imageProfile: {
        marginTop: 20,
        marginLeft: 20,
        width: 50,
        height: 50
    }
});