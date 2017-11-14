import React, {Component} from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Login from "../containers/Login";
import CreateSchedule from "../containers/CreateSchedule";
import Profile from "../containers/Profile";
import MySchedule from "../containers/MySchedule";
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoProfile from "../containers/InfoProfile";
import Details from "../containers/Details";
import Launcher from "../containers/Launcher";
import HistorySchedule from "../containers/HistorySchedule";
import DetailsHistorySchedule from "../containers/DetailsHistorySchedule";
import ViewMap from "../containers/ViewMap";
import RequesterInformation from "../components/RequesterInformation";


const Tab = TabNavigator({
        MySchedule: {
            screen:MySchedule,
            navigationOptions: {
                title: 'My Schedule',
                tabBarLabel: 'MySchedule',
                tabBarIcon: ({tintColor}) =>
                    <Icon name="th-list" size={20}/>
            }
        },
        CreateSchedule: {
            screen: CreateSchedule,
            navigationOptions: {
                title: 'Create Schedule',
                tabBarLabel: 'CreateSchedule',
                tabBarIcon: ({tintColor}) =>
                    <Icon name="list-ul" size={20}/>
            }
        },

        HistorySchedule: {
            screen: HistorySchedule,
            navigationOptions: {
                title: 'History Schedule',
                tabBarLabel: 'HistorySchedule',
                tabBarIcon: ({tintColor}) =>
                    <Icon name="list-ul" size={20}/>
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            style: {
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
            },
            labelStyle: {
                margin: 0,
                padding: 0,
                fontSize: 9,
            },
            tabStyle: {},
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            upperCaseLabel: false,
            pressOpacity: 0.1
        },


    });
const Stack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    InfoProfile: {
        screen: InfoProfile,
        navigationOptions: {
            title: 'Account'
        }
    },
    Tab: {
        screen: Tab,
        navigationOptions: {}
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details '
        }
    },
    Launcher: {
        screen: Launcher,
        navigationOptions: {
            header: null
        }

    },
    CreateSchedule: {
        screen: CreateSchedule,
        navigationOptions: {
            header: null
        }
    },
    RequesterInformation: {
        screen: RequesterInformation,
        navigationOptions: {
            header: null
        }
    },
    DetailsHistorySchedule: {
        screen: DetailsHistorySchedule,
        navigationOptions: {
            title: 'DetailsTimeFinish '
        }
    },
    ViewMap: {
        screen: ViewMap,
        navigationOptions: {
            title: 'ViewMap '
        }

    }

});
const SideMenu = DrawerNavigator({
        Profile: {
            screen: Stack
        }
    },
    {
        drawerWidth: 300,
        drawerPosition: "left",
        contentComponent: props => <Profile {...props}/>
    }
);
export default SideMenu;