import {View,Text,Image} from "react-native";
import illustration from "../../assets/illustration.png"
import { styles } from "./style";


export function SignInin() {
 
  return (
        <View style={styles.container}>
          <Image source={illustration} style={styles.image} resizeMode='stretch'/>
         <View style={styles.content}>
          <Text style={styles.title}>
            Organize suas {'\n'}
            Jogatinas {'\n'}
            Facilmente

          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos

          </Text>
         </View>
        </View>
  );
}