import './App.css'
import Header from "./components/header.jsx";
import Front from "./components/front.jsx";
import Projects from "./components/projects.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SideMenu from "./components/Sidemenu.jsx";

function App() {

    return (
        <BrowserRouter>
            <>
                <Header />
                <SideMenu />
                <Routes>
                    <Route exact path="/" element={<Front />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App
