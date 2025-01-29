import { StyleSheet, Text, View, Image} from 'react-native';
import Profile from '../components/Profile';

export default function SecondScreen() {

  let data = {
    handle: '@myhandle',
    numPosts: '17',
    followers: '13',
    following: '15',
    name: 'My Name'
    }
;
  return (
    <View style={styles.container}>
      <Profile profile={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
