import React from "react";
import Sidebar from "./sideebar";
// import Football from "./football";
import Home from "./home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/football" element={<Football />}/> */}
        </Routes>
        </BrowserRouter>
        
    )
}
export default App;