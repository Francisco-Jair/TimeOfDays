import React from 'react'
import { Text, View, StyleSheet, Alert, Button } from 'react-native'
import Moment from 'moment'


//moment().format('dddd');  

export default class Times extends React.Component {

    constructor(props) {
        super(props)
        this.state = { timeNow: this.timeNow() }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ timeNow: this.timeNow() })
        }, 30)
    }

    dayOnWeek = () => {

        const dia = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const dyaT = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']
        let day = dia.indexOf(Moment().format('dddd'))

        return dyaT[day]

    }

    timeNow = () => {
        return Moment().format('h:mm:s')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 60, color: 'white' }}>HORA</Text>
                <Text style={{ color: 'red', fontSize: 90 }}>{this.timeNow()}</Text>
                <Text style={{ color: 'red', fontSize: 60 }}>{Moment().subtract(10, 'days').calendar()}</Text>

                <View style={styles.button}>
                    <Button onPress={() => Alert.alert(this.dayOnWeek())} title='Aperte - me' color='#CD6090' type='clear' />
                </View>
            </View>)
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center', // Trabalha como se fosse o eixo x de um plano cartesiano
        justifyContent: 'center',// Trabalha como se fosse o eixo y de um plano cartesiano
        //fontSize: 60,
    },
})