import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Post from '../components/Post';

export default function Profile({profile}){

    let data = {
        author: 'My Name',
        handle: ' @myhandle',
        thoughts: 'To the nasty girl who accused me of not flushing my toilets, I ALWAYS FLUSH. THE BATHROOM DONT SMELL LIKE ME. GO AWAY'
        }
    ;

    return(
    <View>

        <View style={styles.handleContainer}>
            <Text style={styles.handleColor}>{profile.handle}.</Text>
        </View>

        <View style={styles.infoContainer}>
            <Image
                        style={styles.profileImage}
                        source={require('../assets/icon.png')}
                    />

            <View style={styles.numberContainer}>
                <Text style={styles.textColor}>{profile.numPosts}</Text>
                <Text style={styles.otherColor}>posts</Text>
            </View>

            <View style={styles.followersContainer}>
                <Text style={styles.textColor}>{profile.followers}</Text>
                <Text style={styles.otherColor}>followers</Text>
            </View>

            <View style={styles.followingContainer}>
                <Text style={styles.textColor}>{profile.following}</Text>
                <Text style={styles.otherColor}>following</Text>
            </View>
            
        </View>

        <View style={styles.nameContainer}>
        <Text style={styles.textColor}>{profile.name}</Text>
        <View style = {styles.songContainer}>
                        <Text style={styles.otherColor}>This is my bio.</Text>
                    </View>
        <Text style={styles.textColor}>_________________________________________</Text>
        </View>

        <View style={styles.postsContainer}>
        
        <ScrollView style={styles.scrollView}>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
      </ScrollView>
        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    textColor: {
        color: 'white',
        fontWeight: 'bold',
    },
    otherColor: {
        color: 'white',
    },
    handleColor: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 50,
    },
    musicImage: {
        width: 15,
        height: 15,
        borderRadius: 15,
    },
    handleContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        //backgroundColor: 'red'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        //backgroundColor: 'green'
    },
    numberContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'blue',
        marginRight: 30,
        marginLeft: 30,
        alignItems: 'center'
    },
    followersContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'purple',
        marginRight: 30,
        alignItems: 'center'
    },
    followingContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        //backgroundColor: 'red'
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 30
        //backgroundColor: 'blue' 
    },
    songContainer: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'orange'
    },
    postsContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 500,
        alignItems: 'center'
        //backgroundColor: 'blue' 
    },
    
  });