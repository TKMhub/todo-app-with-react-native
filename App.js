import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo アプリ</Text>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.save} onPress={() => {}}>
        <Text>追加</Text>
      </TouchableOpacity>
      <FlatList
        data={[
          { id: 1, title: "Todo 1" },
          { id: 2, title: "Todo 2" },
          { id: 3, title: "Todo 3" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  save: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
});
