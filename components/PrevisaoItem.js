import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
}from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
  if (!props.previsao.weather) return <View></View>
  else{
  return (
    <Cartao estilos={estilos.cartao}>
      <View style={estilos.tela}>
          <Image 
            style={estilos.imagem}
            source={{uri: "https://openweathermap.org/img/wn/" + props.previsao.weather[0].icon + ".png"}}
          />
          <View>

            <View style={estilos.segundaLinha}>
              <Text style={estilos.valor}>Nascer do Sol: {new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}</Text>
            </View>
            <View>
              <Text style={estilos.valor}>Pôr do Sol: {new Date(props.previsao.sunset * 1000).toLocaleTimeString()}</Text>
            </View>
            <View>
              <Text style={estilos.valor}>Sensação Térmica: {props.previsao.feels_like + "\u00B0"}</Text>
            </View>

          </View>
      </View>
    </Cartao>
  )}
}

const estilos = StyleSheet.create ({
  primeiraLinha: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  segundaLinha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  }, 
  cartao: {
    marginBottom: 8
  },
  tela: {
    flexDirection: 'row'
  },
  imagem: {
    width: 50,
    height: 50
  },
  valor: {
    marginHorizontal: 2
  }
});
export default PrevisaoItem;