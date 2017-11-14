import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    Picker,
    ScrollView,
    Button,
    CheckBox,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import DatePicker from 'react-native-datepicker';
import images from "../components/images";
import Modal from 'react-native-modal'
import RequesterInformation from '../components/RequesterInformation';
import ServiceRecipientInformation from '../components/ServiceRecipientInformation'
//import {CheckBox} from 'react-native-elements';

export default class CreateSchedule extends Component {


    click() {
        alert('a')
    }

    state = {
        isModalVisible: false,
        status: false,
        status1: false,
        status2: false
    }

    _showModal = () => {
        const {navigate} = this.props.navigation;
        navigate('RequesterInformation');
    }

    _hideModal = () => this.setState({isModalVisible: false})

    constructor(props) {
        super(props);
        status: true
        status1:true
        status2:true
        this.state = {
            selected:
                '008 - Support Centre and Retail',
            date: "",
            language: "Afghanistan",
            selected1: 'SubDep1',
            selected2: 'as ddd',
            selected3: 'Male',
            selected4: 'Regular On-site Interpretation',
            selected5: 'Daily',
            selected5: '01 Day before',
            time: "",
            number: 1
        }
    }

    AddService() {
        let temp = this.state.number;
        temp++;
        this.setState({number: temp})
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
        var arrComponent = [];
        for (let i = 0; i < this.state.number; i++) {
            arrComponent.push(
                <View key={i}>
                    <ServiceRecipientInformation/>
                </View>
            );
        }
        return (
            <View style={{backgroundColor: 'white', margin: 10}}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}>Requester Information</Text>
                    </View>
                    <Text>Customer*</Text>
                    <TextInput placeholder={'customer'}/>
                    <Text>Department</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
                            <Picker.Item label="008-Support Centre and Retail" value="008-Support Centre and Retail"/>
                            <Picker.Item label="Department Testing" value="Department Testing"/>
                            <Picker.Item label="Dep1" value="Dep1"/>
                            <Picker.Item label="Department1" value="Department1"/>
                        </Picker>
                    </View>
                    <Text>Sub-department</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected1}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected1: itemValue})}>
                            <Picker.Item label="SubDep1" value="SubDep1"/>
                            <Picker.Item label="SubDep2" value="SubDep2"/>
                        </Picker>
                    </View>
                    <Text>Requester*</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected2}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected2: itemValue})}>
                            <Picker.Item label="as ddd" value="as ddd"/>
                            <Picker.Item label="acx sss" value="acx sss"/>
                        </Picker>
                    </View>
                    <Text>Requester Phone</Text>
                    <TextInput placeholder={'Requester Phone'}/>
                    <Text>Requester Email</Text>
                    <TextInput placeholder={'Requester Email'}/>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={this._showModal}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{
                                    padding: 5,
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    borderColor: 'white',
                                    borderWidth: 1
                                }}>Add Requester </Text>
                            </View>

                        </TouchableOpacity>
                        <Modal isVisible={this.state.isModalVisible}
                               backdropColor={'white'}
                               backdropOpacity={1}
                               onBackButtonPress={() => null}
                        >
                            <View style={{flex: 1}}>
                                <RequesterInformation/>
                            </View>
                        </Modal>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}>Appointment Information</Text>
                    </View>
                    <Text>Date*</Text>
                    <DatePicker
                        style={{width: 330}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({date: date})
                        }}
                    />
                    <Text>Time*</Text>
                    <DatePicker
                        style={{width: 330}}
                        date={this.state.time}
                        mode="time"
                        placeholder="select time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(time) => {
                            this.setState({time: time})
                        }}
                    />
                    <Text>Estimated Duration (hours)</Text>
                    <TextInput placeholder={'enter the number'}
                               keyboardType={'numeric'}
                    />
                    <Text>Language*</Text>
                    <TextInput placeholder={'Language'}/>
                    <Text>Gender Request</Text>
                    <Picker
                        selectedValue={this.state.selected3}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected3: itemValue})}>
                        <Picker.Item label="Male" value="Male"/>
                        <Picker.Item label="Female" value="Female"/>
                    </Picker>
                    <Text>Service Type</Text>
                    <Picker
                        selectedValue={this.state.selected4}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected4: itemValue})}>
                        <Picker.Item label="Regular On-site Interpretation" value="Regular On-site Interpretation"/>
                        <Picker.Item label="After Hours On-site Interpretation"
                                     value="After Hours On-site Interpretation"/>
                        <Picker.Item label="Rush Request On-site Interpretation"
                                     value="Rush Request On-site Interpretation"/>
                    </Picker>

                    <View style={styles.MainContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <CheckBox onChange={this.ShowHideTextComponentView1}
                                      value={this.state.status1}
                            />
                            <Text style={{marginTop: 7}}>On-Site Appointment</Text>
                        </View>

                        {
                            this.state.status1 ?
                                null

                                : <View>
                                    <Text>Street Address*</Text>
                                    <TextInput/>
                                    <Text>Apt#/Suite</Text>
                                    <TextInput/>
                                    <Text>City*</Text>
                                    <TextInput/>
                                    <Text>State/Province</Text>
                                    <TextInput/>
                                    <Text>Zip/code/Postail Code*</Text>
                                    <TextInput/>
                                    <Text>Location-be specific</Text>
                                    <TextInput/>
                                    <Text>Briefly Describe the Subject of this Appointment </Text>
                                    <TextInput/>
                                </View>
                        }
                    </View>


                    {/*<CheckBox*/}
                    {/*center*/}
                    {/*title='Add Services Recipient'*/}
                    {/*iconRight*/}
                    {/*iconType='material'*/}
                    {/*checkedIcon='clear'*/}
                    {/*uncheckedIcon='add'*/}
                    {/*checkedColor='red'*/}
                    {/*checked={this.state.checked}*/}
                    {/*/>*/}
                    <Text> Location - be specific</Text>
                    <TextInput/>
                    <Text>Briefly Describe the Subject of this Appointment</Text>
                    <TextInput/>
                    <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
                        <Image source={images.arrow}/>
                        <Text style={{color: 'blue'}}>Appointment Note (Use for Internal Remarks)</Text>
                    </View>

                    <Text> Subject </Text>
                    <TextInput/>
                    <Text>Body</Text>
                    <TextInput/>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}> Service Recipient Information</Text>
                    </View>

                    {arrComponent}
                    <Button
                        onPress={() => {
                            this.AddService()
                        }}
                        title="add service"
                        color="#841584"

                    />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}>Requester Information</Text>
                    </View>
                    <View style={styles.MainContainer}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <CheckBox onChange={this.ShowHideTextComponentView}
                                      value={this.state.status}
                            />
                            <Text style={{marginTop: 7}}>Enable Recurrence</Text>
                        </View>
                        {
                            this.state.status ?
                                <View>
                                    <Text>Appointment Date/Time</Text>
                                    <TextInput/>
                                    <Text>Estimated Duration </Text>
                                    <TextInput/>
                                    <Text>End Data*</Text>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                marginLeft: 36
                                            }
                                        }}
                                        onDateChange={(date) => {
                                            this.setState({date: date})
                                        }}
                                    />
                                    <Text>Recurrence Pattern</Text>
                                    <Picker
                                        selectedValue={this.state.selected5}
                                        onValueChange={(itemValue, itemIndex) => this.setState({selected5: itemValue})}>
                                        <Picker.Item label="Daily" value="Daily"/>
                                        <Picker.Item label="Weekly" value="Weekly"/>
                                        <Picker.Item label="Bi-weekly" value="Bi-weekly"/>
                                        <Picker.Item label="Monthly" value="Monthly"/>
                                    </Picker>
                                    <Button
                                        onPress={() => this.click()}
                                        title="Show Appointment Dates"
                                        color="red"
                                    />
                                    <FlatList
                                        data={[{key: 'a'}, {key: 'b'}]}
                                        renderItem={({item}) => <Text>{item.key}</Text>}
                                    />
                                </View>
                                : null
                        }
                    </View>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    }
});