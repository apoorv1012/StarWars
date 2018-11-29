import React from 'react'
import { Route, Switch} from 'react-router-dom'
import HomeContainer from '../../container/home'
import LoginContainer from '../../container/login'
import SearchContainer from '../../container/search'


const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={ LoginContainer }/>
            <Route exact path='/home' component={ HomeContainer }/>
            <Route exact path='/search' component={ SearchContainer }/>
            <Route path='/search/:id' component={ SearchContainer }/>
            <Route component={HomeContainer}/>
        </Switch>
    </div>
)
export default Routes
