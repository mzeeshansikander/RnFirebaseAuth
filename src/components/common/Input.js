import React from 'react';
import {Text,TextInput,View} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,autoCapitalize,secureTextEntry}) => {

    const {inputStyle,labelStyle,containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text 
                style={labelStyle}>{label}</Text>
            
            <TextInput 
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                onChangeText={ onChangeText}
                autoCorrect={false}
                placeholder={placeholder}
                autoCapitalize = {autoCapitalize}

            />

        </View>



    );

};
const styles={
    containerStyle:{
        flexDirection: 'row',
        height: 40, 
        flex: 1,
        alignItems: 'center'

    },
    labelStyle:{
        flex: 1,
        fontSize: 18,
        paddingLeft: 20

    },

    inputStyle:{
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
}
export {Input}