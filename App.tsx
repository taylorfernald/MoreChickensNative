import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, VirtualizedList, Dimensions} from 'react-native';

export default function App() {
    const getItem = (_data, index) => ({
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    });

    const getItemCount = _data => 50;

    const Item = ({title}) => (
      <Image style={styles.image} source={require('./assets/chicken.jpg')}/>
    );

    return (
        <View style={styles.container}>
            <VirtualizedList
                initialNumToRender={4}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 400,
        resizeMode: 'stretch',
    },
});