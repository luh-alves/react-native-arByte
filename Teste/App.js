import React, { useState } from 'react';
import { Text, SafeAreaView, View, Button } from 'react-native';

//aatividade 28
function Votos() {
  const [totalDeVotos, setTotalDeVotos] = useState(0);
  return (
    <View>
      <Text> O total de Votos é {totalDeVotos}!</Text>
      <Button
        onPress={() => {
          setTotalDeVotos(totalDeVotos + 1 );
        }}
        title="Adicionar um voto"

      />
    </View>
  );
}
export default function Cafe() {
  return (
    <SafeAreaView>
      <Votos />
    </SafeAreaView>
  );
}

