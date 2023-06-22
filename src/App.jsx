import React from 'react'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Analytics from './components/Analytics'
import Report from './components/Repoort'
import Layout from './components/Layout'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Sidebar/>} />
    <Route path="/analytics" element={<Analytics/>}/>
    <Route path="/repoort" element={<Report/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App