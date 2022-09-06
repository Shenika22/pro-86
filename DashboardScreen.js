import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class LoadingScreen extends Component{
    render(){
        retuern(
            <View
            style ={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                }}>
                    <Text>DashboardScreen</Text>
                    </View>
        )
    }
}