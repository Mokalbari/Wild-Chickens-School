import { useState } from 'react'
import './App.css'
import data from './chickenTab.json'
import TeacherList from './modules/TeacherList'
import StudentList from './modules/StudentList'
import Navbar from './modules/Navbar'
import Footer from './modules/Footer'

const App = () => {
  return (
    <>
      <Navbar imageLink="/public/assets/logo.png" size={'150px'} />
      <main>
        <TeacherList />
        <StudentList />
      </main>
      <Footer />
    </>
  )
}

export default App
