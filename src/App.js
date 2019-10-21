import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login/index";
import Footer from "./common/footer/Footer1";
import {Footer10DataSource} from "./common/footer/data.source";
import Home from "./pages/home";


export default class App extends React.Component {

    render() {
        return (

            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route  component={Home}/>
                </Switch>
                <Footer dataSource={Footer10DataSource}/>
            </HashRouter>
        )
    }
}