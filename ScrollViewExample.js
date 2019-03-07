import React from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';

class ScrollViewExample extends React.Component {
    state = {
        names: [
            { 'name': 'Ben', 'id': 1 },
            { 'name': 'Susan', 'id': 2 },
            { 'name': 'Robert', 'id': 3 },
            { 'name': 'Mary', 'id': 4 },
            { 'name': 'Daniel', 'id': 5 },
            { 'name': 'Laura', 'id': 6 },
            { 'name': 'John', 'id': 7 },
            { 'name': 'Debra', 'id': 8 },
            { 'name': 'Aron', 'id': 9 },
            { 'name': 'Ann', 'id': 10 },
            { 'name': 'Steve', 'id': 11 },
            { 'name': 'Mary', 'id': 24 },
            { 'name': 'Daniel', 'id': 25 },
            { 'name': 'Laura', 'id': 26 },
            { 'name': 'John', 'id': 27 },
            { 'name': 'Debra', 'id': 28 },
            { 'name': 'Aron', 'id': 29 },
            { 'name': 'Ann', 'id': 210 },
            { 'name': 'Steve', 'id': 211 },
        ]
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map(item => (
                            <View key={item.id} style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ScrollViewExample;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 4,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})