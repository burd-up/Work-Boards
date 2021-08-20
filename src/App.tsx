import React, {useState} from "react";
import './App.css';
import Header from "./views/Header/HeaderContainer";
import {Switch, Route} from 'react-router-dom'
import Container from "@material-ui/core/Container";
import ListOfProjectsContainer from "./views/ListOfProjects/ListOfProjectsContainer";
import ListOfTasksContainer from "./views/ListOfTasks/ListOfTasksContainer";
import AddTaskFormContainer from "./views/AddTaskForm/AddTaskFormContainer";
import AddProjectFormContainer from "./views/AddProjectForm/AddProjectFormContainer";
import WorkBoardContainer from "./views/WorkBoard/WorkBoardContainer";
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/core";
import AddUserFormContainer from "./views/AddUserForm/AddUserFormContainer";

function App() {

    const [color, setColor] = useState({})

    const theme = createTheme(
        color
    );

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <Header setColor={setColor}/>
                <Switch>
                    <Container>
                        <Route path='/currentProject' render={() => <WorkBoardContainer/>}/>
                        <Route path='/currentTasks' render={() => <ListOfTasksContainer/>}/>
                        <Route path='/projects' render={() => <ListOfProjectsContainer/>}/>
                        <Route path='/addTaskForm' render={() => <AddTaskFormContainer/>}/>
                        <Route path='/addProjectForm' render={() => <AddProjectFormContainer/>}/>
                        <Route path='/addUserForm' render={() => <AddUserFormContainer/>}/>
                    </Container>
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;
