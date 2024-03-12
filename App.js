import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
        <Image style = {styles.container}
        source = {{uri:'https://arquisp.org.br/sites/default/files/santo/foto/09-29-sao-rafael_.jpg'}}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
