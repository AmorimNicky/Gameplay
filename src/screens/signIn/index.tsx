import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style';

export function SignInin() {
  return (
    <View style={styles.container}>
      <Text>Componente de teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}


