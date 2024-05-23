import { AntDesign } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Modal from '../components/Modal'
import TodoItemList from '../components/TodoItemList'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import { ToDoStackParamList } from '../navigation/StackNavigator'
import TodoItemType from '../types/TodoItem'
import { storageTodoListKey } from '../utils/constants'

const initialTodoItem: TodoItemType = { id: 1, description: '', title: '' }

type TodoListScreenProps = NativeStackScreenProps<
  ToDoStackParamList,
  'TodoList'
>

const TodoListScreen = ({ navigation }: TodoListScreenProps) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [todoItem, setTodoItem] = React.useState<TodoItemType>(initialTodoItem)
  const [isNew, setIsNew] = React.useState<boolean>(false);

  const [lsTodoItem, setLsTodoItem] = useAsyncStorage<TodoItemType[]>(
    storageTodoListKey,
    []
  )

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ padding: 15 }}
        >
          <AntDesign name="pluscircle" size={24} color="darkseagreen" />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const handleAddItem = async () => {
    if (!todoItem) {
      alert('Descrição da tarefa inválida!')
      return
    }
    if (!lsTodoItem.length) {
      setLsTodoItem([todoItem])
      setTodoItem(initialTodoItem)
      setModalVisible(false)
      return
    }

    if (!isNew) {
      console.log('Editando', todoItem)
      const index = lsTodoItem.findIndex((todo) => todo.id === todoItem.id);
      const todoItemListCopy = { ...lsTodoItem };
      todoItemListCopy[index] = todoItem
      setLsTodoItem(todoItemListCopy);
      setModalVisible(false);
      return
    }
    setIsNew(true);

    const todoItemListCopy = [...lsTodoItem]

    const lastItemIdPlusOne = lsTodoItem[lsTodoItem.length - 1].id + 1

    const newItem: TodoItemType = {
      ...todoItem,
      id: lastItemIdPlusOne,
    }

    todoItemListCopy.push(newItem)

    setLsTodoItem(todoItemListCopy)
    setTodoItem(initialTodoItem)
    setModalVisible(false)
  }

  const handleDeleteItem = React.useCallback(
    (item: TodoItemType) => {
      const index = lsTodoItem.findIndex((todo) => todo.id === item.id)

      const todoItemListCopy = lsTodoItem.toSpliced(index, 1)

      setLsTodoItem(todoItemListCopy)
    },
    [lsTodoItem]
  )

  const handleEditItem = React.useCallback(
    (item: TodoItemType) => {
      console.log('item', item)
      setModalVisible(true);
      setIsNew(false);
      const index = lsTodoItem.findIndex((todo) => todo.id === item.id)
      const itemRecovered = lsTodoItem.find(todo => todo.id === item.id);
      if (itemRecovered) {
        setTodoItem(itemRecovered)
        itemRecovered.description = item.description;
        itemRecovered.title = item.title;
        const todoItemListCopy = lsTodoItem.toSpliced(index, 1, itemRecovered)
        setLsTodoItem(todoItemListCopy)
      }
    },
    [lsTodoItem]
  )

  return (
    <View style={styles.container}>
      {/* Modal do nosso projeto */}
      <Modal
        modalVisible={modalVisible}
        onCloseModal={() => setModalVisible(!modalVisible)}
        title="Descreva a tarefa"
      >
        {/* Input para guardar o titulo */}
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={todoItem.title}
          onChangeText={(textValue) =>
            setTodoItem((prev) => ({ ...prev, title: textValue }))
          }
        />

        {/* Input para guardar a descrição */}
        <TextInput
          style={[styles.input, { minHeight: 80 }]}
          placeholder="Descrição"
          value={todoItem.description}
          onChangeText={(textValue) =>
            setTodoItem((prev) => ({ ...prev, description: textValue }))
          }
          multiline={true}
          numberOfLines={4}
        />

        {/* Botões da modal */}
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleAddItem}
          >
            <Text style={styles.textStyle}>{isNew ? 'Adicionar' : 'Editar'}</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Lista de tarefas salvas */}
      <TodoItemList key={JSON.stringify(lsTodoItem)} onDelete={handleDeleteItem} onEdit={handleEditItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    minWidth: '50%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },

  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginLeft: 'auto',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default TodoListScreen
