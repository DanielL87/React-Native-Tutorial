import React, { Component } from 'react'
import { Image, Text, StyleSheet } from 'react-native'

const ImagesExample = () => (
    <Image style={styles.image} source=
        {{uri:'https://vignette.wikia.nocookie.net/blogclan-2/images/b/b9/Random-image-15.jpg/revision/latest?cb=20160706220047'}} />
    )

export default ImagesExample

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400
    }
   
})