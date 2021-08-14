import React, {useState} from "react";
import './App.css';
import Header from "./views/Header/HeaderContainer";
import {Switch, Route} from 'react-router-dom'
import Form from "./views/AddTaskForm/AddTaskForm";
import WorkBoard from "./views/WorkBoard/WorkBoardContainer";
import Container from "@material-ui/core/Container";
import ListOfProjectsContainer from "./views/ListOfProjects/ListOfProjectsContainer";
import ListOfTasksContainer from "./views/ListOfTasks/ListOfTasksContainer";
import AddTaskFormContainer from "./views/AddTaskForm/AddTaskFormContainer";
import AddProjectFormContainer from "./views/AddProjectForm/AddProjectFormContainer";
import WorkBoardContainer from "./views/WorkBoard/WorkBoardContainer";

function App() {

    return (
        <div className='App'>
            <Header/>
            <Switch>
                <Container>
                    <Route path='/currentProject' render={() => <WorkBoardContainer/>}/>
                    <Route path='/currentTasks' render={() => <ListOfTasksContainer/>}/>
                    <Route path='/projects' render={() => <ListOfProjectsContainer/>}/>
                    <Route path='/addTaskForm' render={() => <AddTaskFormContainer/>}/>
                    <Route path='/addProjectForm' render={() => <AddProjectFormContainer/>}/>
                </Container>
            </Switch>
        </div>
    );
}

export default App;
