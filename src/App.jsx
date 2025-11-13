import HomePage from "./HomePage/homepage";
import NavBar from "./NavBar/navbar";
import Cards from "./cards";
import {Route, Routes} from "react-router-dom"

function App() {
  return(
    <>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cards" element={<Cards/>}/>
          </Routes>

        </div>

    </>
  );

}

export default App
