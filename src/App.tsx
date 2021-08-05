import React, {useState} from "react";
import './App.css';
import Header from "./views/Header/HeaderContainer";
import {Switch, Route} from 'react-router-dom'
import Form from "./views/Form/Form";
import WorkBoard from "./views/WorkBoard/WorkBoardContainer";
import Container from "@material-ui/core/Container";

function App() {

    return (
        <div className='App'>
            <Header/>
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
