import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Test from './view/index'
import App from './view/app'
import history from './view/history'
import login from './view/login'
import historya from './view/history1'
import numhistory from './view/numhistory'
import numhistoryb from './view/numhistory1'
import App2 from './view/index2'

const SliderComponent = () => (
  <Switch>
    <Route path='/' exact component={App} />
    <Route path="/taiwanlotto" component={Test}/>
    <Route path="/taiwanlottohistory" component={history}/>
    <Route path="/login" component={login}/>
    <Route path="/taiwanlottohistorya" component={historya}/>
    <Route path='/taiwanlottonumhistory' component={numhistory}/>
    <Route path='/taiwanlottonumhistoryb' component={numhistoryb}/>
    <Route path='/taiwanlotto3x2'  component={App2} />
  </Switch>
)

ReactDOM.render((
  <HashRouter >
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));
