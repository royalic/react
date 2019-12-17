import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Test from './view/taiwanlottoLottery/index'
import App from './view/taiwanlottoLottery/app'
import history from './view/taiwanlottoLottery/history'
import login from './view/taiwanlottoLottery/login'
import historya from './view/taiwanlottoLottery/history1'
import numhistory from './view/taiwanlottoLottery/numhistory'
import numhistoryb from './view/taiwanlottoLottery/numhistory1'
import App2 from './view/taiwanlottoLottery/index2'
import App3 from './view/taiwanlottoLottery/index3'
import App4 from './view/taiwanlottoLottery/index4'
import App5 from './view/taiwanlottoLottery/index5'
import App6 from './view/taiwanlottoLottery/index6'
import App7 from './view/taiwanlottoLottery/index7'
import Test2 from './view/taiwanlotto539/index'
import App22 from './view/taiwanlotto539/index2'
import App23 from './view/taiwanlotto539/index3'
import App24 from './view/taiwanlotto539/index4'
import App25 from './view/taiwanlotto539/index5'
import App26 from './view/taiwanlotto539/index6'
import App27 from './view/taiwanlotto539/index7'

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
   <Route path="/taiwanlotto539" component={Test2}/>
    <Route path='/taiwanlotto5393x2'  component={App22} />
    <Route path='/taiwanlotto5392xs'  component={App23} />
    <Route path='/taiwanlotto539lzks'  component={App24} />
    <Route path='/taiwanlotto539sxlzp'  component={App25} />
    <Route path='/taiwanlotto539slp'  component={App26} />
    <Route path='/taiwanlotto539lpbz'  component={App27} />
  </Switch>
)

ReactDOM.render((
  <HashRouter >
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));
