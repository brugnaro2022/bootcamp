import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import api from './services/api'
import './App.css'

function App () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  function handleAppProject () {
    setProjects([...projects, `Novo Projeto ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title='Projects' />
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type='button' onClick={handleAppProject}>
        Adicionar Projeto
      </button>
    </>
  )
}

export default App
