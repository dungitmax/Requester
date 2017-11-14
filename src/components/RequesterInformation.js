import React, {Component} from 'react'
import {
    View, Text, TextInput, CheckBox, Picker, ScrollView, Button, BackHandler
} from 'react-native';

export default class RequesterInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:
                '008 - Support Centre and Retail'
        }
    }

    ShowHideTextComponentView = () => {

        if (this.state.status == true) {
            this.setState({status: false})
        }
        else {
            this.setState({status: true})
        }
    }
    ShowHideTextComponentView1 = () => {

        if (this.state.status1 == true) {
            this.setState({status1: false})
        }
        else {
            this.setState({status1: true})
        }
    }
    ShowHideTextComponentView2 = () => {

        if (this.state.status2 == true) {
            this.setState({status2: false})
        }
        else {
            this.setState({status2: true})
        }
    }
    state = {
        isModalVisible: false,
        status: false,
        status1: false,
        status2: false
    }

    Save() {
        alert('save');
    }

    Cancle = () => {
        const {navigation} = this.props;
        console.log('navigation', navigation)
        navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, margin: 5}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, color: 'red'}}>Requester Information</Text>
                    </View>
                    <Text> User Name* </Text>
                    <TextInput/>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CheckBox onChange={this.ShowHideTextComponentView}
                                  value={this.state.status}
                        />
                        <Text style={{marginTop: 7}}>Is Active</Text>
                    </View>
                    <Text>Customer</Text>
                    <TextInput/>
                    <Text>Department</Text>
                    <Picker
                        selectedValue={this.state.selected}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
                        <Picker.Item label="008-Support Centre and Retail" value="008-Support Centre and Retail"/>
                        <Picker.Item label="Department Testing" value="Department Testing"/>
                        <Picker.Item label="Dep1" value="Dep1"/>
                        <Picker.Item label="Department1" value="Department1"/>
                    </Picker>
                    <Text>Sub-department</Text>
                    <Picker>
                        <Picker.Item label="008-Support Centre and Retail" value="008-Support Centre and Retail"/>
                    </Picker>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text>First Name*</Text>
                            <TextInput/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>Last Name*</Text>
                            <TextInput/>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text>Phone Number</Text>
                            <TextInput keyboardType={'numeric'}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>Ext</Text>
                            <TextInput keyboardType={'numeric'}/>
                        </View>
                    </View>
                    <Text>Email Address* </Text>
                    <TextInput/>
                    <Text> Supervisor Name</Text>
                    <TextInput/>
                    <Text> Suite Number</Text>
                    <TextInput/>
                    <Text>Medical Type</Text>
                    <TextInput/>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CheckBox onChange={this.ShowHideTextComponentView1}
                                  value={this.state.status1}
                        />
                        <Text style={{marginTop: 7}}>Email Notification when appointments get covered</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CheckBox onChange={this.ShowHideTextComponentView2}
                                  value={this.state.status2}
                        />
                        <Text style={{marginTop: 7}}>Email Notification when appointments are declined</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 10}}>
                        <View style={{marginRight: 10}}>
                            <Button
                                onPress={() => {
                                    this.Save()
                                }}
                                title="Save"
                                color='blue'
                            />
                        </View>

                        <Button
                            onPress={this.Cancle}
                            title="cancel"
                            color='red'
                        />
                    </View>

                </View>
            </ScrollView>
        )
    }
}