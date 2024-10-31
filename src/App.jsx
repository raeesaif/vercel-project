import {BrowserRouter,Route, Routes} from "react-router-dom"
import {Home} from "../src/pages/index"
import { AddBlog } from "./pages/AddBlog"
function App() {
 

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
