import { StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../../assets/backgroundImages/img/index'

const Weather = ({ weatherData, fetchWeatherData }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const { weather,
        name,
        main: { temp, humidity, temp_min, temp_max, grnd_level },
        wind: { speed },
        sys: { sunrise, sunset },
        clouds: { all },

    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    const getBackgroundImg = (weather) => {
        if (weather === 'Snow') return snow
        if (weather === 'Clear') return sunny
        if (weather === 'Rain') return rainy
        if (weather === 'Haze') return haze
        return haze;
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImg}
                    resizeMode='cover'
                >
                    <SearchBar fetchWeatherData={fetchWeatherData} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.headerText, color: '#fff', fontSize: 46 }}>{name}</Text>
                        <Text style={{ ...styles.headerText, color: '#fff' }}>{main}</Text>
                        <Text style={{ ...styles.headerText, color: '#fff' }}>{temp}°C</Text>
                    </View>
                    <View style={styles.extraInfo}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                        </View>
                    </View>
                    <View style={styles.extraInfo}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Sunrise</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{new Date(sunrise * 1000).toLocaleString()}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Sunset</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{new Date(sunset * 1000).toLocaleString()}</Text>
                        </View>
                    </View>
                    <View style={styles.extraInfo}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Minimum Temperature</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{temp_min}°C</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Maximum Temperature</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{temp_max}°C</Text>
                        </View>
                    </View>
                    <View style={styles.extraInfo}>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Cloudiness</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{all}%</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Atmospheric pressure on the ground level</Text>
                            <Text style={{ fontSize: 22, color: 'white' }}>{grnd_level}hPa</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    }
})