import "./styles.css";
import { FormInput } from "./components/FormInput";
import { ListTodo } from "./components/ListTodo";
import { MidSection } from "./components/MidSection";
import { Filter } from "./components/Filter";
import { DataProvider } from "./components/DataProvider";
export default function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To do list</h1>
        <FormInput />
        <ListTodo />
        <MidSection />
        <Filter />
      </div>
    </DataProvider>
  );
}
