import React, { useState } from 'react';
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, View,  } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState ('');
  const [result, setResult] = useState ({});

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obterPrevisoes = () => {
    setResult({})
    const forecastTarget = forecast + cidade + "&appid=" + apiKey
    fetch(forecastTarget)
    .then((dados) => dados.json())
    .then((dados) => {
      const oneCallTarget = oneCall 
      + "&lat=" + dados["city"]["coord"]["lat"] 
      + "&lon=" + dados["city"]["coord"]["lon"] 
      + "&appid=" + apiKey
      fetch(oneCallTarget)
      .then((answer) => answer.json())
      .then((answer) => {      
      setResult(answer["current"])
      Keyboard.dismiss()
    });
    });
  };

  const forecast = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const oneCall = "https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&exclude=minutely,hourly,daily";
  const apiKey = "801ac8eb316986872ddb3af2ca253a22";

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
            title="ok"
            onPress= {obterPrevisoes}
        />
      </View>
      <PrevisaoItem previsao={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF',
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow:0.9
  }
});
