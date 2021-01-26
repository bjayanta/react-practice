# React Redux

1. Directory structure 
    - src > services > actions 
    - src > services > reducers
    - src > services > types.js
    - src > services > store.js

2. Work with *type.js*
    - create global types 
    - export 

3. Work with *reducer*
    - create a reducer (counter reducer)
        - import global **types**
        - create **initial state**
        - create a default function which is accept 2 params, state and action respectively 
        - implement code as per app concern 
        - finally export 

4. Manage multiple *reducer*
    - create **index.js** 
    - import all the **reducer** from **reduces** directory and import **combineReducers** from **redux** also
    - emit all the reducer into **combineReducers** as a object
    - export the **combineReducers**

5. Work with *action*
    - create action files
    - import global **types**
    - create functions as per ur requirment 
        - every method has a return type which is an object & the object content **type** also 
    - finally export all ur functions/methods

6. Work with *store*
    - import **createStore** from **redux** & import **root(index.js)** reducer from **reducers** directory 
    - create an empty **initial state** (object)
    - create & export a constant named **store** & assign **createStore**
    - **createStore** support 2 params which is **root reducer** & **initial state** respectively 

7. Import *store* & *Provider* into **index.js** (main file) file from *store.js* & *react-redux* respectively
    - Wrap **master component** (App) component with **Provider**
    - set an attribute named **store**

8. Implement on component
    - import **methods** & **connect** from **action** & **react-redux** rexpectively
    - map *state* & *dispatch* to props
    - implement all the props into **component**
    