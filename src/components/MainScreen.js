import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Icon } from 'native-base';

class MainScreen extends Component{

    static navigationOptions = {
        headerLeft: <Icon type="AntDesign" name="camerao" style={{ paddingLeft: 10}} />,
        title: "Instagram",
        headerRight: <Icon type="FontAwesome" name="send-o" style={{ paddingRight: 10, fontSize: 20}} />
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen;