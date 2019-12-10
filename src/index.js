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
import App3 from './view/index3'
import App4 from './view/index4'
import App5 from './view/index5'
import App6 from './view/index6'
import App7 from './view/index7'

const SliderComponent = () => (
  <Switch>
    <Route path="/" exact component={login}/>
    <Route path='/select'  component={App} />
    <Route path="/taiwanlotto" component={Test}/>
    <Route path="/taiwanlottohistory" component={history}/>
    <Route path="/taiwanlottohistorya" component={historya}/>
    <Route path='/taiwanlottonumhistory' component={numhistory}/>
    <Route path='/taiwanlottonumhistoryb' component={numhistoryb}/>
    <Route path='/taiwanlotto3x2'  component={App2} />
    <Route path='/taiwanlotto2xs'  component={App3} />
    <Route path='/taiwanlottolzks'  component={App4} />
    <Route path='/taiwanlottosxlzp'  component={App5} />
    <Route path='/taiwanlottoslp'  component={App6} />
    <Route path='/taiwanlottolpbz'  component={App7} />
  </Switch>
)

ReactDOM.render((
  <HashRouter >
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));
