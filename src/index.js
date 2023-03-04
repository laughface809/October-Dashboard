import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Provider } from 'react-redux'
import './styles.css'
import './18n'

import http from './helpers/axios-helper'
import { store as userStore, SET_TENANT, SET_USER } from './redux/user/store'
import { store as transactionAsData } from './redux/transactions/store'
import { PrivateRoute } from './helpers/PrivateRoute'
import { Login } from './views/account/Login'
import App from './views/app/App'
import { Register } from './views/account/Register'
import IndexPage from './views/index-page'

const hist = createBrowserHistory()
const HOST = window.location.hostname

http.get('/session')
  .then(async function (response) {

    const RES = response
    const AUTH = RES.data.tenantId

    if(AUTH){
      userStore.dispatch({
        type: SET_TENANT,
        payload: {
          tenantId: response.data.tenantId
        }
      })

      await http.get('/v1/transactions').then((result) => {
        userStore.dispatch({
          type: SET_USER,
          payload: {
            userId: response.data.userId
          }
        })
      }).catch((e) => {
      })
    }

    const navigate = (e) => {
      window.open(`http://${e}.${window.location.host}`, '_self')
    }
    
    function IndexElement({
      HOST
    }){
      const [domain, setDomain] = React.useState('')
      return(
        <React.Fragment>
        {HOST.split('.').length === 1 ?
        <IndexPage
        domain={domain}
        setDomain={setDomain}
        navigate={navigate}
        />
        : 
        <Provider store={userStore}>
          <Provider store={transactionAsData}>
            <HashRouter history={hist} basename='/'>
              <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/app' component={App} />
                <Redirect from='/' to='/app' />
              </Switch>
            </HashRouter>
          </Provider>
        </Provider>
        }
        </React.Fragment>
      )
    }

    ReactDOM.render(
      <IndexElement HOST={HOST} />,
      document.getElementById('root')
    )
  })