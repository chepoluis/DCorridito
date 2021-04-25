import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text h1>Hello from Home page</Text>

            <Button 
                onPress = {() => navigation.navigate('Restaurant')}
                title = "Restaurant"
            />
        </View>
    )
}

export default Home;