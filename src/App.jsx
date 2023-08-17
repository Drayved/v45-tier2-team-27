import { createContext, useState } from "react"
import './App.css'
import Landing from './components/Landing'


export const AuthContext = createContext()

export default function App() {
  const [meteoriteData, setMeteoriteData] = useState([])

  return (
    <AuthContext.Provider value={{meteoriteData, setMeteoriteData}}>
      <div className='app-border'>
        <Landing />  
      </div>     
    </AuthContext.Provider>
  )
}
