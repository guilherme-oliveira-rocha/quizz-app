import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/play/instructions" exact element={<QuizInstructions />}/>
        <Route path="/play/Quiz" exact element={<Play />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;