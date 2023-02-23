import Article from "./components/Article";
import { useState, createContext } from "react";
import styles from './App.css'
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <Article />
      </UserContext.Provider>
    </div>
  );
}

export default App;
