---
title: "Redux学习记录"
displayTitle: "Redux 学习记录"
date: 2021-10-25T22:54:10+08:00
lastmod: 2021-11-24T22:54:10+08:00
tags: [frontend, redux, react]
categories: [编程技术]
type: "post"
draft: false
---

在此文中，记录我通过 Codecademy Redux 课程学习到的知识点，以及我对 Redux 的理解。

## 为什么需要 Redux

在 React 中有一个重要的设计模式：stateful component, and stateless component (状态组件与无状态组件) 。在这种设计模式下，父组件（状态组件）可以通过组件属性将状态传递给子组件（无状态组件）；子组件可以通过调用在父组件中创建 Event Handler 来修改父组件的状态；而子组件如果想要更新兄弟组件的状态，则需要先更新父组件的状态，再由父组件将状态传递给兄弟组件。

在有复杂功能的项目中，共享的状态通过这种“单向”的状态传递方法将会非常难以管理。例如，一个层级很深的组件如果想要与另一个组件同步状态，状态将会从底层一直传递到顶层的状态组件，然后再将状态分发下去。在这种情况下，就可以使用 Redux 这类状态管理器，将共享状态的逻辑从顶层状态组件中剥离出来，然后再根据组件逻辑进行管理。

在[官方文档](https://redux.js.org/faq/general#when-should-i-use-redux)中，提到何时使用 Redux 时，指出在以下情况时，可以考虑使用 Redux:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
- You need to see how that state is being updated over time

## Redux 核心概念

### 单向数据流动

Redux 是基于[`Flux` 架构](https://facebook.github.io/flux/docs/in-depth-overview/)来设计的，在这种模式下，共享的状态信息并不是保存在组件内，而是一个对象中。

大多数的应用都会有三个部分：

- 状态（State）：用来储存应用的信息；
- 视图（View）：用来将信息展示给用户；
- 动作（Action）：可以让用户改变状态的事件。

在普通的 React 应用中，这三个部分的功能可以重叠。例如：组件既可以渲染以展示信息给用户，又可以保存状态信息。而基于 Flux 架构设计的 Redux 通过将状态置于单独一个对象进行管理，从而使三个部分分隔开来，并且规定数据的流动一定是单向的，如下图所示：

{{< image src="/imgs/One-way-data-flow.webp" height="500px" title="One way data flow">}}

具体来说就是：状态保存当前应用的信息 => 视图将这些信息展示给用户 => 用户通过与视图的交互产生动作，从而改变状态 => 视图更新最新状态的数据...

### Reducer 是什么？

在 Redux 中，状态可以是任意一种 JavaScript 数据类型，动作可以通过一个 JavaScript 对象来展示，例如：

```JS
const action = {
  type: 'todos/addTodo',
  payload: 'Take selfies'
};
```

其中：`type` 属性用于描述这个动作，`payload` 属性用于储存与这个动作相关的信息。

`reducer` 就是用来表示某个动作是如何更新状态的函数。通俗一点，`reducer` 的作用就是等同于描述 “动作 + 当前状态 => 更新后的状态” 这一过程。

`reducer` 函数有三个主要的准则：

1. “新状态”只能根据“旧状态”与“动作”产生（没有其余输入参数）；
2. 不允许修改当前的状态（“旧状态”）；
3. 不允许有任何异步逻辑与其他副作用。

### 状态的核心：store

再此之前的小节已经提及状态、动作以及如何根据状态（旧状态）与动作来更新状态（通过`reducer`函数），这一切的信息与过程都储存在 store 这一对象中。
store 对象存储了状态信息以及 `reducer` 函数。当用户想通过与视图交互来改变状态时，事件处理器会将 action 分发至 store 中，通过 store 中的 reducer 来达到改变状态的目的。

## 重要的 store API

对 store 对象进行操作是 Redux 的核心，下方总结几个重要关于 store 的 API

### `createStore()`

Redux 提供一个帮助函数来快速创建 store 对象，例如：

```JS
import { createStore } from 'redux'

const initialState = 'on';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
}

const store = createStore(lightSwitchReducer);
```

最简单的情况就是将 `reducer` 函数传入 `createStore()` 函数中就可以创建 store 对象：`createStore(reducer)`。
其他详细的用法可参见[官方文档](https://redux.js.org/api/createstore)。

### `store.dispatch(action)`

store 里储存了当前的状态以及 `reducer` 函数，可通过`store.dispatch(action)` 这一 API 将一个动作分发至 store 对象中。例如（接上例）：

```JS
store.dispatch({ type: 'toggle' });
```

最简单的情况就是将一个动作对象传入 `store.dispatch()` 函数中，而 action 对象必须包含的是 `type` 属性，如上例所示。
对比上例，更好的一个实践方法是创建一个 action 创建函数（Action Creator），例如：

```JS
const toggle = () => {
  return { type: "toggle" };
}

store.dispatch(toggle())
```

### `store.getState()`

store 对象通过 `store.getState` 这一 API 可以获得当前的状态。例如，接上例，已经分发了 toggle 动作之后：

```JS
console.log(store.getState()); // Prints 'off'
```

其实，在调用 `store.dispatch` API 时，实际上是在用以下方式调用 `reducer`：

```JS
lightSwitchReducer(store.getState(), { type: 'toggle' });
```

### `store.subscribe(listener)`

在典型的应用中，用户触发事件的行为可以通过事件监听器（Event Listener）来监听，以对变化做出反应。Redux 也有类似的 API 来监听 store 中状态的变化，例如：

```JS
const reactToChange = () => {
  console.log(`The light was switched ${store.getState()}!`);
}
const unsubscribe = store.subscribe(reactToChange);

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched off!'

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched on!'

unsubscribe();
// reactToChange() is now unsubscribed

store.dispatch(toggle());
// no print statement!

console.log(store.getState()); // Prints 'off'
```

`store.subscribe()` 函数需要传入监听器函数。在上例中，任何状态的变化都会触发 `reactToChange` 这个监听函数，直到调用 `unsubscribe()` 取消对 store 的监听。

## 复杂状态的管理

在以上小节已经总结了 Redux 的一些基本用法：

- `reducer` 函数就是 (state, action) => nextState；
- 通过`createStore` 创建 store 对象；
- 通过调用`getState()`、`dispatch()` 以及 `subscribe()` 三个重要的 API 来获取 store 的信息以及对 store 进行操作。

### 对功能进行切片（Slices）

当应用有许多复杂的功能时，更为有效的一种实践方法是将各个功能进行切片，也就是状态中的顶层属性。例如：

```JS
state = {
  todos: [
    {
      id: 0,
      text: 'Complete the Learn Redux course',
      isCompleted: false
    },
    {
      id: 1,
      text: 'Build a counter app',
      isCompleted: true
    },
  ],
  visibilityFilter: 'SHOW_INCOMPLETE'
};
```

在上方例子中，`state.todos` 和 `state.visibilityFilter` 都是顶层属性，可被叫做功能的一个切片。之后可以根据这些功能的切片来管理代码结构。

### `reducer composition`

当应用有很多功能时，一个较好的实践方法就是每个单独的切片都有单独的 `reducer` 函数，并且只负责更新这个切片的状态，这种模式叫做`reducer composition`。例如下面的例子：

```JS
// Handles only `state.todos`.
const initialTodos = [
  { id: 0, text: 'learn redux', completed: false },
  { id: 1, text: 'build a redux app', completed: true },
  { id: 2, text: 'do a dance', completed: false },
];
const todosReducer = (todos = initialTodos, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return [...todos, action.payload]
    case 'todos/toggleTodo':
      return todos.map(todo => {
        return (todo.id === action.payload.id) ?
          { ...todo, completed: !todo.completed } :
          {...todo};
      });
    default:
      return todos;
  }
};

// Handles only `state.filter`
const initialFilter = 'SHOW_INCOMPLETE',
const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return filter;
};

const rootReducer = (state = {}, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  };
  return nextState;
};

const store = createStore(rootReducer);
```

上方例子中，根据两个不同的切片创建了两个 `reducer`：`todosReducer` 和 `initialFilter`，然后将不同切片的 `reducer` 通过一个 `rootReducer` 函数进行整合。

对于上方`rootReducer`函数的用法，Redux 也提供一个名为`combineReducers()` 的 API 来对于代码进行简化。上方的例子中的最后一部分可以写为：

```JS
import { createStore, combineReducers } from 'redux'

// todosReducer and filterReducer omitted.

const reducers = {
    todos: todosReducer,
    filter: filterReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
```

### 代码文件结构

现行有一个较好的模式，用于对代码文件结构进行整理，这个模式叫做[Redux Ducks pattern](https://github.com/erikras/ducks-modular-redux)。根据此模式的文件结构如下：

```BASH
src/
|-- index.js
|-- app/
    |-- store.js
|-- features/
    |-- featureA/
        |-- featureASlice.js
    |-- featureB/
        |-- featureBSlice.js
```

此模式有以下特点：

- 整个应用的入口为 `index.js` 文件；
- store 储存在名为 app 的文件夹中；
- 根据不同功能，创建不同文件夹，并在该文件夹中创建 `slice.js` 文件以储存切片的状态。

## 连接 Redux 和 React

通过使用官方的 `react-redux` 库来连接渲染 UI 的 react 以及状态管理的 redux，主要目的是为了解决下列问题：

- 让应用可以不通过使用 `props` 来访问 redux 中的 store；
- 通过订阅指定的组件来优化渲染过程。

### `<Provider>` 组件

使用 `react-redux` 提供的 `<Provider>` 组件可以使应用访问 store 更为方便，不需要使用 `props` 进行传递，例如下例：

```JS
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';

import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### 创建选择器

`react-redux` 提供简便创建选择器函数的方法。通过创建选择器函数，可以使某个组件仅访问所需要的 store 中的数据。
一个选择器函数将 `state` 做为参数，返回组件所需从 `state` 获取的内容。例如：

```js
/*
Given a state with an array of objects, labeled 'todos', and a string, labeled 'filter':

state = {
  todos: [
    {id: 1, isComplete: true, text: 'Go shopping'}
    {id: 2, isComplete: false, text: 'Call home'}
  ],
  filter: 'SHOW_ALL'
}
*/

// Select the current filter
export const selectFilter = (state) => state.filter

// Select the `text` from each todo in an array.
export const selectTodoText = (state) => state.todos.map((todo) => todo.text)

// Select the id values of completed todos in an array.
export const selectIsCompleteIDs = (state) =>
  state.todos.filter((todo) => todo.isComplete).map((todo) => todo.id)
```

### `useSelector` 和 `useDispatch` API

通过使用 `useSelector` API 有两个作用：

1. 根据选择器函数从 store 中返回所需的数据；
2. 订阅 `<Provider />` 组件的子组件，如果选择器中的数据发生变化， React 会重新渲染该组件。
   例如：

```JS
// Todos.js
import { useSelector } from 'react-redux';
import { selectTodos } from 'todosSlice.js';

export const Todos = () => {
  const todos = useSelector(selectTodos);

  return (
    <p>{todos}</p>
  )
};
```

此外，使用 `useDispatch` API 可以更为简便地分发动作，例如：

```JS
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './todoSlice.js';
import { removeTodo } from './todoSlice.js';

const Todo = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(removeTodo(todo))}>
      {todo}
    </button>
  )
}
```

如果没有 `useDispatch` API，分发动作将通过传递 `props` 完成，例如：

```JS
const render = () => {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();
```

## Redux Toolkit 的使用

使用 Redux Toolkit 可以更为简单的配置 store 以及创建状态切片。
通过 npm 安装 Redux Toolkit：`npm install @reduxjs/toolkit`

### `createSlice` API

使用 `createSlice` API 可以更为简单的创建状态切片。用两个例子来说明：

- 没有使用 `createSlice`

```JS
/* todosSlice.js  */
const addTodo = (todo) => {
  return {
    type: 'todos/addTodo',
    payload: todo
  }
}

const toggleTodo = (todo) => {
  return {
    type: 'todos/toggleTodo',
    payload: todo
  }
}

const todos = (state = [], action) => {
 switch (action.type) {
   case 'todos/addTodo':
     return [
       ...state,
       {
         id: action.payload.id,
         text: action.payload.text,
         completed: false
       }
     ]
   case 'todos/toggleTodo':
     return state.map(todo =>
       todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
     )
   default:
     return state
 }
}
```

- 使用 `createSlice`

```js
/* todosSlice.js */
const options = {
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ]
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    },
  },
}

const todosSlice = createSlice(options)
```

此外，`createSlice` 还默认使用 Immer 库来写可变风格的代码。例如：

```JS
addTodo: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
          completed: false
        }
      ]
    }
/* 使用 Immer */
addTodo: (state, action) => {
      state.push({
        ...action.payload,
        completed: false
      })
    }
```

需要注意的是，使用 `createSlice` 创建的状态切片返回的是一个对象，例如：

```JS
/* Object returned by todosSlice */
{
 name: 'todos',
 reducer: (state, action) => newState,
 actions: {
   addTodo: (payload) => ({type: 'todos/addTodo', payload}),
   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
 },
 // case reducers field omitted
}
```

### `configureStore` API

使用 `configureStore` API 可快速创建 store，简化所需写的代码。例如：

```JS
const store = configureStore({
 reducer: {
   // Define a top-level state field named `todos`, handled by `todosReducer`
   todos: todosReducer,
   filters: filtersReducer
 }
})
```

## 使用 Redux 中间件来进行异步操作

在 Redux 中，通常中间件（Middleware）作用在动作分发之后、reducer 接收到分发的动作之前，其通过 `applyMiddleware` 函数进行添加。例如：

```JS
import { createStore, applyMiddleware } from 'redux';
import { middleware1, middleware2, middleware3 } from './exampleMiddlewares';
import { exampleReducer } from './exampleReducer';
import { initialState} from './initialState';

const store = createStore(
  exampleReducer,
  initialState,
  applyMiddleware(
    middleware1,
    middleware2,
    middleware3
  )
);
```

一个中间件的写作需要遵守一定的格式，例如：

```JS
const exampleMiddleware = storeAPI => next => action => {
  // do stuff here
  return next(action);  // pass the action on to the next middleware in the pipeline
}
```

使用自定义中间件，可以解决一些组件运行中需要处理的异步问题。在 Redux 中，一个普遍的做法是通过添加 _Thunk_ 中间件来解决异步问题。
Thunk 指的是一个可以包裹函数表达式的函数，让这个函数表达式延后执行。例如：

```JS
const add = (x,y) => {
  return () => {
    return x + y;
  }
}

const delayedAddition = add(2,2)
delayedAddition() // => 4
```

上例中，`delayedAddition()` 就是一个 Thunk。

通过使用 `redux-thunk` 库可以很简单地实现让动作创建器返回一个 Thunk 而不是一个对象（`store.dispatch` 需要接收一个包含 `type` 属性的对象。）。一个简单地例子：

```JS
const getUser = (id) => {
  return async (dispatch, getState) => {
    const payload = await fetchUser(id)
    dispatch({type: 'users/addUser', payload: payload})
  }
}
```
