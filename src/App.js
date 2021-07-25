import React, {useState} from "react";
import './App.css';
import Header from "./views/Header/Header";
import {Switch, Route} from 'react-router-dom'
import Form from "./views/Form/Form";
import ControlPanel from "./views/ControlPanel/ControlPanel";
import WorkBoard from "./views/WorkBoard/WorkBoard";
import Box from "@material-ui/core/Box";
import indigo from "@material-ui/core/colors/indigo";
import Container from "@material-ui/core/Container";

function App() {
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <div className='App'>
            <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
            <Switch>
                <Container>
                    <Route path='/form' render={() => <Form/>}/>
                    <Route path='/boards' render={() => <WorkBoard/>}/>
                </Container>
            </Switch>
        </div>
    );
}

export default App;
