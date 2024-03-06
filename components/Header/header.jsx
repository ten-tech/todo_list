import React from 'react';
import { View, Image, Text} from 'react-native';
import { headerStyles } from "./header.style.js";

export function Header({ title, logoSource }) {
    return (
        <View style={headerStyles.container}>
            <Image source={logoSource} style={headerStyles.logo} />
            <Text style={headerStyles.title}>{title}</Text>
        </View>
    );
}


