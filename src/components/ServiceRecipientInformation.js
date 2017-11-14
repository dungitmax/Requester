import React, {Component} from 'react'
import {
    View, TextInput, Text, Image, CheckBox, Picker, StyleSheet, TouchableOpacity
} from 'react-native'
import images from "../components/images";

export default class ServiceRecipientInformation extends Component {
    constructor(props) {
        super(props);
        status2:false
        this.state = {
            selected5: '01 Day before',
            showView: true
        }
    }

    removeView() {
        this.setState({
            showView: false
        })
    }

    ShowHideTextComponentView2 = () => {

        if (this.state.status2 == true) {
            this.setState({status2: false})
        }
        else {
            this.setState({status2: true})
        }
    }

    _onPressButton() {

    }

    render() {
        return (
            <View>
                <View>
                    <View style={{flexDirection: 'row', padding: 5, flexDirection: 'row'}}>
                        <Image source={images.start}/>
                        <Text>Service Recipient </Text>
                        <View>
                            {this.renderView()}
                        </View>

                    </View>
                    <TextInput placeholder={'Last Name*'}/>
                    <TextInput placeholder={'First Name*'}/>
                    <TextInput placeholder={'Cau Giay*'}/>
                    <TextInput placeholder={'Kim Ma*'}/>
                    <TextInput placeholder={'Ba Dinh*'}/>
                </View>
                <View style={styles.MainContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CheckBox onChange={this.ShowHideTextComponentView2}
                                  value={this.state.status2}
                        />
                        <Text style={{marginTop: 7}}>Telephone Confirmation Request</Text>
                    </View>
                    {
                        this.state.status2 ?
                            <View>
                                <Text>When to Call</Text>
                                <Picker
                                    selectedValue={this.state.selected5}
                                    onValueChange={(itemValue, itemIndex) => this.setState({selected5: itemValue})}>
                                    <Picker.Item label="01 Day before"
                                                 value="01 Day before"/>
                                    <Picker.Item label="02 Day before" value="02 Day before"/>
                                    <Picker.Item label="03 Day before" value="03 Day before"/>
                                    <Picker.Item label="04 Day before" value="04 Day before"/>
                                </Picker>
                                <Text>Home Phone</Text>
                                <TextInput placeholder={'Home Phone'}/>
                                <Text>Purpose of Phone Call</Text>
                                <TextInput placeholder={'Purpose of Phone Call'}/>
                                <Text>Work Phone</Text>
                                <TextInput placeholder={'Work Phone'}/>
                                <Text>Cell Phone</Text>
                                <TextInput placeholder={'Cell Phone'}/>
                            </View>
                            : null
                    }
                </View>
            </View>
        )
    }

    renderView() {
        if (this.state.showView) {
            return (
                <View>
                    <TouchableOpacity onPress={() => this.removeView()}>
                        <Image source={images.delete}/>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    }
});