import axios from "axios";
import { useReducer, useEffect } from "react";

import React from 'react'

type StateType = {
    posts: {title: string} | {}
    loading: boolean
    error: string
}

type ActionTypes = {
    type: 'FETCH_SUCCESS' | 'FETCH_ERROR'
    payload: {title: string} | string
}

function ReducerDataFetching() {
    const reducer = (currState: StateType, action: ActionTypes) => {
        switch(action.type) {
            case 'FETCH_SUCCESS':
                return {
                    posts: action.payload,
                    loading: false,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    posts: {},
                    loading: false,
                    error: 'Something went wrong!'
                }
            default:
                return currState
        }

    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(resp => {
                dispatch({type: 'FETCH_SUCCESS', payload: resp.data})
            }).catch(err => {
                dispatch({type: 'FETCH_ERROR', payload: ''})
            })
    }, [])

    const [state, dispatch] = useReducer(reducer, {
        posts: {},
        loading: true,
        error: ''
    })
  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {"title" in state.posts && <h1>{state.posts.title}</h1>}
    </div>
  )
}

export default ReducerDataFetching
