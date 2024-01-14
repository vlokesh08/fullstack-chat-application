import './App.css'
import { Routes, Route } from 'react-router-dom'

import Chatpage from './pages/Chatpage'
import TabsDemo from './pages/TabsDemo'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TabsDemo />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </>
  )
}

export default App
