import React,{Component} from 'react'
import {createStore,applyMiddleware} from 'redux'
import rootReducers from './reducers/rootReducers'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

const store = createStore( rootReducers, {}, applyMiddleware(thunk,logger) ) // today i really realize the value of middleware and scpecially thunk after wasting 4 hour

store.subscribe(()=>{ // this method tell us about store which update via reducer using Action creator with the help of any object
    console.log("Getting Updating State via store", store.getState())
})

export default store