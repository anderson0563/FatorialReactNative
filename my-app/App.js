import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const useFatorial = () => {
  const [value, setValue] = useState(0);

  const setFatorial = (newValue) => {
    fatorial=1;
    n=parseInt(newValue);
    if(n<2) setFatorial(fatorial);
    for(i=2; i<=n; i++)
      fatorial = fatorial*i;
    setValue(fatorial);
  };

  return [value, setFatorial];
};


const Fatorial = () => {
  const [fatorial, setFatorial] = useFatorial(0);
  const [n, setN] = useState(0);
  return (
    <View>
       <TextInput
       style={styles.title}
        placeholder="Informe n"
        onChangeText={n => setN(n)}
        keyboardType="numeric"
      />
      <Text>{fatorial}</Text>
      <Button title="clique aqui" onPress={() => setFatorial(n)} />
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Fatorial />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 80,
  },
});

export default App;