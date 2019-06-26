import React from 'react';
import {View, Text} from 'react-native';

const styles = {
 textStyle: {
  fontSize: 20,
  textAlign: 'center'
 },
 headerStyle: {
  backgroundColor: '#F8F8F8',
  alignItems: 'center',
        height: 40,
        marginTop: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
 }
};

const Header = (props) => {
    const { textStyle, headerStyle } = styles;
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

export default Header;
