import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import TLogin from '../types/Login';
import { userTokenKey } from '../utils/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ToDoStackParamList } from '../navigation/StackNavigator';

type LoginScreenProps = NativeStackScreenProps<
  ToDoStackParamList,
  'Login'
>

const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  const { setToken } = route.params;
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [lsLogin, setLsLogin] = useAsyncStorage<TLogin | undefined>(
    userTokenKey,
    undefined
  )
  // const { signIn } = React.useContext(authContext);
  // const { setUserToken } = route.params;

  const handleLogin = () => {
    if (username.trim() != '' && password.trim() != null) {
      console.log('Logando com usuario: ', username, ' e com a senha: ', password)
      // setLsLogin({ username, password })
      setToken(username + password)
      navigation.navigate("TodoList")
    } else {
      console.error('Usuário ou senha invalido.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder='Usuário'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
      />
      <Pressable
        style={[styles.button]}
        onPress={()=> handleLogin()}
      >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 30,
    width: 300,
    borderColor: 'lightgrey',
    fontWeight: '500',
  },
  header: {
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 10,
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#2196f3',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderColor: 'lightgrey'
  },
  textButton: {
    color: '#f4f4f4',
    fontWeight: 'bold',
  }
});

export default LoginScreen;