// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware } from 'redux'

import { countReducer } from './countReducer'

// 引入redux-thunk ,用于支持异步的action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))