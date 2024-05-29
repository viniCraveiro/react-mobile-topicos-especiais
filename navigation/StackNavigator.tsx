import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import LoginScreen from '../pages/LoginScreen'
import PokemonScreen from '../pages/PokemonScreen'
import SquirtleScreen from '../pages/SquirtleScreen'
import TodoListScreen from '../pages/ToDo'
import { userTokenKey } from '../utils/constants'

// Tipagem para as rotas do Squirtle e Pokemon, com parmâmetros

export type PokemonStackParamList = {
  Squirtle: undefined
  Pokemon: {
    pokemon?: string
  }
}

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>()

const pokemonScreenOptionStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#007bff',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
}

// Main stack, rotas do Squirtle e Pokemon

const MainStackNavigator = () => {
  return (
    <PokemonStack.Navigator screenOptions={pokemonScreenOptionStyle}>
      <PokemonStack.Screen
        name="Squirtle"
        component={SquirtleScreen}
        options={{ title: 'Squirtle' }}
      />
      <PokemonStack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={({ route }) => ({ title: route.params.pokemon })}
      />
    </PokemonStack.Navigator>
  )
}

export type ToDoStackParamList = {
  TodoList: undefined,
  Login: { setToken: (v: string) => void; }
}

const TodoStack = createNativeStackNavigator<ToDoStackParamList>()

const todoScreenOptionStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'dimgrey',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
}

const ToDoListStackNavigator = () => {
  const [token, setToken] = useAsyncStorage(userTokenKey, '')


  return (
    <TodoStack.Navigator screenOptions={todoScreenOptionStyle}>
      {
        token ? <TodoStack.Screen
          name="TodoList"
          options={{ title: 'Todo List' }}
          component={TodoListScreen}
        /> : <TodoStack.Screen
          name="Login"
          options={{ title: 'Login' }}
          component={LoginScreen}
          initialParams={{ setToken }}
        />
      }
    </TodoStack.Navigator>
  )
}

export { MainStackNavigator, ToDoListStackNavigator }

