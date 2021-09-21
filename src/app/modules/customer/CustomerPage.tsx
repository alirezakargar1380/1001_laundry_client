import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
// import {Charts} from './components/Charts'
// import {Feeds} from './components/Feeds'
import Overview from './components/Overview'
import Add from './components/Add'
// import {Lists} from './components/Lists'
// import {Tables} from './components/Tables'
// import {Mixed} from './components/Mixed'
// import {Statistics} from './components/Statistics'

const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Widgets',
    path: '/customers/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CustomerPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/customers/overview'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Charts</PageTitle>
        <Overview />
      </Route>
      <Route path='/customers/add'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Feeds</PageTitle>
        <Add />
      </Route>
      <Redirect from='/customers' exact={true} to='/customers/overview' />
      <Redirect to='/customers/overview' />
    </Switch>
  )
}

export default CustomerPage
