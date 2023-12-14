import { Text, View } from 'native-base'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';
const Verify = () => {

    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(true);
    const toggleBottomSheet = () => {
        setIsBottomSheetVisible(true);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/BG.png')} style={styles.backgroundImage}  ></ImageBackground>

            <Modal
                isVisible={isBottomSheetVisible}
                onBackdropPress={toggleBottomSheet}
                style={styles.modal}
            >
                <View style={styles.bottomSheet}>

                <Text style={{ color: "black" }}>Aaysuh Yadav</Text>
                </View>



            </Modal>

        </View>
    )
}

export default Verify


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',

    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 25,
        paddingTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end'
    }

})
