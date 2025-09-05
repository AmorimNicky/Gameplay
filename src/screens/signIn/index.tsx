import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export function SignInin() {

  const [text,setText] = useState("");
 
  return (
    <View style={styles.container}>
      <Text>oi, digita algo ai :3</Text>
      <TextInput style={{width:200,height:50,borderWidth:3}} onChangeText={setText} />
        <Text>você digitou: {text} </Text>
        
      <StatusBar style="auto" />
    </View>
  );
}


