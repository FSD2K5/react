import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routers/index.js";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRouter.map((route) => (
                        <Route path={route.path} element={route.element} key={route.id}></Route>
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
