import { StyleSheet, View } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import { Card, Text, Icon } from '@ui-kitten/components/ui';


export default function DisplayPokemon() {
    const [info, setInfo] = useState();
    
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setInfo(response);
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <View style={styles.container}>
            <Card  style={styles.card}>
                <View style={styles.cardHeader}>
                    {
                        info && <Text style={styles.title}>{info.data.name[0].toUpperCase() + info.data.name.slice(1) }</Text>
                    }

                    {
                        info && info.data.stats.map((b, ind) => {
                            if(b.stat.name == "hp") {
                                return(
                                    <View key={ind} style={styles.healthTypeArea}>
                                        <Text style={styles.health}>
                                            {b.base_stat} {b.stat.name}
                                        </Text>
                                        <Icon width={20} height={20} fill='#000' name='flash-outline'/>
                                    </View>
                                )
                            }
                        })
                    }
                </View>
                    
                { info && <Image source={info.data.sprites.other.home.front_default} alt="Picture of the author" width={300} height={300} /> }

                <View style={styles.statistics}>
                    <View>
                        {
                            info && <Text>Weight: {info.data.weight.toFixed(1)}</Text>
                        }


                        {
                            info && info.data.stats.map((b, ind) => {
                                if(b.stat.name == "attack" || b.stat.name == "defense") {
                                    return(
                                        <View key={ind} className={styles.statsChart}>
                                            <Text className={styles.statsChartIndividual}>
                                                {b.stat.name[0].toUpperCase() + b.stat.name.slice(1)}: {b.base_stat.toFixed(1)}
                                                
                                            </Text>
                                        </View>
                                    )
                                }
                            })
                        }
                    </View>
                    <View style={styles.statisticsRight}>
                        {
                            info && info.data.stats.map((b, ind) => {
                                if(b.stat.name == "special-attack" || b.stat.name == "special-defense" || b.stat.name == "speed") {
                                    return(
                                        <View key={ind} className={styles.statsChart}>
                                            <Text className={styles.statsChartIndividual}>
                                                {b.stat.name[0].toUpperCase() + b.stat.name.slice(1)}:  {b.base_stat.toFixed(1)}
                                            </Text>
                                        </View>
                                    )
                                }
                            })
                        }
                    </View>
                </View>

               
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        width: 350,
        backgroundColor: '#FDEFB2',
        borderWidth: 10,
        borderColor: "#E3C565"
    },
    title: {
        fontWeight: "800",
        fontSize: 30
    },
    healthTypeArea: {
        flexDirection: "row",
    },
    health: {
        margin: 3
    },
    statistics: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});