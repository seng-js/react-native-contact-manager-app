import {Button, Text, View} from "react-native";

const DetailsScreen = ({navigation, route}) => {
    const {name} =  route.params;
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen [{name}]</Text>
            <Button title="Back to Home" onPress={() => navigation.popToTop()} />
        </View>
    );
}

export default DetailsScreen;