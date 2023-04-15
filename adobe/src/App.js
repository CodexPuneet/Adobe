import { createContext, useState } from 'react';
import './App.css';
import NavLink  from './components/Navbar/NavLink';
import HomeBgImg from './components/Pages/HomeBgImg';
import AllPost from './components/Pages/AllPost';

export const AccountContext = createContext();
function App() {
  const [haveUser, setHasUser] = useState(false);
  
  const toggleHaveUser = ()=>{
    setHasUser(!haveUser);
  }

  return (
    <AccountContext.Provider value={{haveUser, toggleHaveUser}}>
      <div className="App">
        <NavLink />
        {
        haveUser ? <AllPost/> : <HomeBgImg/>
        }
      </div>
    </AccountContext.Provider>
  );
}

export default App;