import { StyleSheet, Text, View } from 'react-native';
import DisplayPokemon from '../component/DisplayPokemon/DisplayPokemon';

export default function Home({navigation}) {
    

    return (
        <View style={styles.container}>
            <DisplayPokemon/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
