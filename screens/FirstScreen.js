import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Post from '../components/Post';

export default function FirstScreen({navigation}) {

  let data = {
    author: 'Ms. Who Forgot to Flush',
    handle: '@flushurdamntoilet',
    title: 'Song Title - Artist',
    thoughts: 'Whoever went number two in the bathroom and forgot to flush, i am going to F you the F up. Now the whole bathrom smells like you. Get potty trained PLEASE'
    }
;
  return (
    <View style={styles.container}>
      <View style={styles.appName}>

        <Text style={styles.textColor}>FLUSHPLEASE.</Text>

            <View style={styles.button}>
                <Button 
                    title = "My Profile"
                    onPress ={ 
                      () => navigation.navigate("My Profile")
                    }
                >
                </Button>
            </View>
      </View>
      <ScrollView style={styles.scrollView}>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
          <Post post={data}/>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic'
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'top',
  },
  appName: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    width: 130,
    alignItems: 'flex-end',
  },
  scrollView: {
  },

});
