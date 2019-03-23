import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CoktailsList from './components/coktails/CoktailsList'
import CoktailsForm from './components/coktails/CoktailsForm'
import CoktailDetail from './components/coktails/CoktailDetail'


function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/coktails" component={CoktailsList}/>
            <Route exact path="/coktails/new" component={CoktailsForm}/>
            <Route exact path="/coktails/:coktailId" component={CoktailDetail}/>
            <Route exact path="/coktails/:coktailId/edit" component={CoktailsForm}/>
        </Switch>
    )
}

export default Routes
