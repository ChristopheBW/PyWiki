import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Guide from './components/Guide';
import Exercise from './components/Exercise';
import Forum from './components/Forum';
import MainNavBar from './components/MainNavBar';
import Footer from "./components/Footer";
import GuideVariable from "./components/GuideVariable";
import GuideExpression from "./components/GuideExpression";
import GuideList from "./components/GuideList";
import GuideString from "./components/GuideString";
import GuideConditions from "./components/GuideConditions";
import GuideLoop from "./components/GuideLoop";
import './App.css';

function App() {
    return (
        <>
            <MainNavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/guide" element={<Guide/>}/>
                    <Route path="/exercise" element={<Exercise/>}/>
                    <Route path="/forum" element={<Forum/>}/>
                    <Route path="/guide-variable" element={<GuideVariable/>}/>
                    <Route path="/guide-expression" element={<GuideExpression/>}/>
                    <Route path="/guide-list" element={<GuideList/>}/>
                    <Route path="/guide-string" element={<GuideString/>}/>
                    <Route path="/guide-conditions" element={<GuideConditions/>}/>
                    <Route path="/guide-loop" element={<GuideLoop/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
