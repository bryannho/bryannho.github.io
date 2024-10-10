import About from './components/About'
import NavBar from './components/NavBar'
import Project from './components/FTAT'
import Skills from './components/Skills'
import React, {useState} from 'react'
import AES from './components/AES'
import VibeSet from './components/VibeSet'
import FTAT from './components/FTAT'

export default function App() {
  const [display, setDisplay] = useState(0)
  
  const mainDisplay = () => {
    if(display === 0) {
      return (<About />)
    }
    else if(display === 1) {
      return (<Skills />)
    }
    else if(display === 2) {
      return(<AES />)
    }
    else if(display === 3) {
      return(<VibeSet/>)
    }
    else {
      return(<FTAT />)
    }
  }

  const changeDisplay = (displayIdx) => {
    if(display !== 0 && displayIdx === display) {
      setDisplay(0)
    }
    else {
      setDisplay(displayIdx)
    }
  }

  return (
    <div className="flex flex-col sm:flex-col sm:h-screen sm:w-screen bg-slate-200">
      <NavBar/>
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 w-3/4 mx-auto my-auto h-3/4">
        <div id="main" className="sm:col-span-2 flex flex-col justify-center my-4 sm:my-0 bg-slate-300 rounded-lg">
          <div className="mx-8">
            {mainDisplay()}
          </div>
        </div>
        <div id="secondary" className="col-span-1 flex flex-col justify-center my-4 py-4 sm:my-0 bg-slate-200 rounded-md">
          <h2 className="mx-8 sm:my-2 text-3xl font-bold text-slate-700">About Me</h2>
          <button className="project-button" onClick={() => changeDisplay(0)}>
            <p className="text-left mx-8 text-slate-700">Who Am I?</p>
          </button>
          <button className="project-button" onClick={() => changeDisplay(1)}>
            <p className="text-left mx-8 text-slate-700">Skills and Education</p>
          </button>
          <h2 className=" mx-8 mb-2 mt-6 text-3xl font-bold text-slate-700">Projects</h2>
          <button className="project-button" onClick={() => changeDisplay(2)}>
            <p className="text-left mx-8 text-slate-700">AES Feedback Generator</p>
          </button>
          <button className="project-button" onClick={() => changeDisplay(3)}>
            <p className="text-left mx-8 text-slate-700">VibeSet</p>
          </button>
          <button className="project-button" onClick={() => changeDisplay(4)}>
            <p className="text-left mx-8 text-slate-700">Teaching Assignment Tracker</p>
          </button>
        </div>
      </div>
    </div>
  )
}