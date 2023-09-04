import ComposeAll from "./Components/ComposeAll"
import {Routes , Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" Component={ComposeAll}/>
      </Routes>
    </>
  )
}

export default App
