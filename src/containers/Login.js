import React, {Component} from 'react';
import {
    View, Text, KeyboardAvoidingView,
    Image, TouchableOpacity, StyleSheet,
    AsyncStorage
} from 'react-native';
import Logo from "../components/Login/Logo";
import Form from "../components/Login/Form";
import images from "../components/images";
import SignupSection from "../components/Login/SignupSection";
import Dimensions from 'Dimensions';
import {URL_LOGIN} from "../components/const";
import {connect} from 'react-redux';
import {textChange} from '../actions/actionLogin';
import MySchedule from '../containers/MySchedule';

var {height, width} = Dimensions.get('window');
height = height - 20;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            IsLogin: false,
            height: height
        };
        this._onPress = this._onPress.bind(this);
    }

    componentDidMount() {
        var token = AsyncStorage.getItem('token', (err, res) => {
            if (err) console.log(err);
            if (res) {
                const {navigate} = this.props.navigation;
                navigate('MySchedule');
            }
        });
    }

    _onPress() {
        fetch(URL_LOGIN, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                rememberMe: true
            })
        }).then((data) => {
            AsyncStorage.setItem(
                'token', data.headers.get("authorization"),
            ),

                console.log('data', data);
            if (data.status === 401 || data.ok === false) {
                alert('Invalid username or password. Please review and try again',)
            }
            else {
                AsyncStorage.setItem(
                    'token', data.headers.get("authorization"),
                );
                AsyncStorage.getItem("token");
                const {navigate} = this.props.navigation;
                navigate('MySchedule');
            }
        }).catch((erro) => {
            console.log(erro);
        })
    }


    getEmail = (username) => {
        console.log('username: ', username);
        this.setState({username: username});
        this.props.dispatch(textChange(username, this.state.password));
    };
    getPass = (password) => {
        console.log('password: ', password);
        this.setState({password: password});
        this.props.dispatch(textChange(this.state.username, password));
    };

    render() {
        console.log('data', this.props);
        return (
            <KeyboardAvoidingView
                style={styles.container1}
                behavior="padding"
            >
                <View style={{height: height}}>
                    <Image style={styles.picture} source={images.wallpaper}>
                        <Logo/>
                        <Form
                            getEmail={this.getEmail}
                            getPass={this.getPass}
                        />
                        <SignupSection/>
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => this._onPress()}>
                                <Text style={styles.text}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        marginHorizontal: 20,
        width: DEVICE_WIDTH - 40,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    container1: {
        backgroundColor: '#4c69a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapPropsToState = (state) => {
    console.log("state", state);
    return {data: state.reducer}
};

export default connect(mapPropsToState)(Login);