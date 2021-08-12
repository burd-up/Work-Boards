import React, {useState} from "react";
import './App.css';
import Header from "./views/Header/HeaderContainer";
import {Switch, Route} from 'react-router-dom'
import Form from "./views/Form/Form";
import WorkBoard from "./views/WorkBoard/WorkBoardContainer";
import Container from "@material-ui/core/Container";
import ListOfProjectsContainer from "./views/ListOfProjects/ListOfProjectsContainer";
import ListOfTasksContainer from "./views/ListOfTasks/ListOfTasksContainer";

function App() {

    return (
        <div className='App'>
            <Header/>
            <Switch>
                <Container>
                    <Route path='/currentTasks' render={() => <ListOfTasksContainer/>}/>
                    <Route path='/projects' render={() => <ListOfProjectsContainer/>}/>
                    <Route path='/form' render={() => <Form/>}/>
                    <Route path='/boards' render={() => <WorkBoard/>}/>
                </Container>
            </Switch>
        </div>
    );
}

export default App;
