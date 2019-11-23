import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {Suspense, lazy} from 'react'

const Counter_useState = lazy(() => import('./Counter_useState'))
const Counter_useEffect = lazy(() => import('./Counter_useEffect'))

const CodeSplit = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <h2>基于路由的代码分割</h2>
            <Switch>
                <Route exact path={'/useState'} component={Counter_useState}/>
                <Route path={'/useEffect'} component={Counter_useEffect}/>
            </Switch>
        </Suspense>
    </Router>
)
export default CodeSplit
