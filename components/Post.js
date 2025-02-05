import { StyleSheet, Text, View, ViewBase, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';

export default function Post({ post }){

    const [likes, setLikes] = useState(0);

    function handlePress() {
        console.log('Pressed');
    }

    return (
        <View>

            <View style={styles.upperContainer}>
                <Image
                    style={styles.profileImage}
                    source={require('../assets/icon.png')}
                />
                
                <View style={styles.rightContainer}>
                    <View style ={styles.posterContainer}>
                        <Text style={styles.textColor}>{post.author}</Text>
                        <Text style={styles.handleColor}>{post.handle}</Text>
                    </View>

                </View>
            </View>

            <View style = {styles.lowerContainer}>
                <Text style={styles.contentColor}>{post.thoughts}</Text>
            </View>

            <View style = {styles.likesContainer}>
                <TouchableOpacity onPress = {() => setLikes(likes + 1)}>
                    <Image
                        style={styles.fireImage}
                        source={require('../assets/fire.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.likesColor}> {likes} others remembered to flush.</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    textColor: {
        color: 'white',
        fontWeight: 'bold',
    },
    handleColor: {
        color: 'gray',
        fontWeight: 'bold'
    },
    likesColor: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    },
    contentColor: {
        color: 'white'
    },
    profileImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50,
    },
    fireImage: {
        width: 20,
        height: 20,
        borderRadius: 15,
    },
    musicImage: {
        width: 15,
        height: 15,
        borderRadius: 15,
    },
    upperContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        //backgroundColor: 'red'
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'green'
    },
    posterContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 20,
        marginTop: 10
        //backgroundColor: 'blue' 
    },
    songContainer: {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'orange'
    },
    lowerContainer: {
        width: 300,
        overflow: 'visible',
        marginBottom: 10
        //backgroundColor: 'gray'
    },
    likesContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        //backgroundColor: 'purple'
    },
  });