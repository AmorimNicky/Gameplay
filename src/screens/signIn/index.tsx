import {View,Text,Image} from "react-native";
import illustration from "../../assets/illustration.png"
import { styles } from "./style";


export function SignInin() {
 
  return (
        <View style={styles.container}>
         <Image source={illustration} style={styles.image} resizeMode='stretch'/>
        </View>

  );
}


