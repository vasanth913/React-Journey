# React Journey starts from here

# gitHub commands to create repository

https://github.com/vasanth913/React-Journey

--> Create New repository by clicking on New
--> Give the name for the repository
--> Make it as public and select the checkbox for README.md
--> create the repository

------------------------------------------------------------------------------------------------ 

# gitHub commands to commit the code

--> Git init (Inside the folder which has code like index.html)
--> git remote add origin https://github.com/vasanth913/React-Journey.git
--> git branch -M main
--> git add .
--> git commit -m "${message}"
--> git push -u origin main
------------------------------------------------------------------------------------------------
# npm init - This utility will walk you through creating a package.json file

package name: (namaste_react)
version: (1.0.0) This is React Journey by Vasanth Ravi
Invalid version: "This is React Journey by Vasanth Ravi"
version: (1.0.0)
description: "This is React Journey by Vasanth Ravi"
entry point: (App.js)
test command: jest
git repository: (https://github.com/vasanth913/React-Journey.git)
keywords: react, namaste react,akshay saini
author: Vasanth Ravi and Akshay Saini
license: (ISC)

package.json --> It is the configuration of npm

packages are sometimes known as dependencies

---------------------------------------------------------------------------------------------------
# dependencies

There are two types of dependecies --> Dependency (Useful for production) and Dev dependency (useful for Development)

 npm install -D parcel

 no symbol --> It means we no need any upgrade (Eg: 2.5.3)

 ^ --> It will update the minor version (Eg: 2.5.3 to 2.5.4)

 ~ --> It will update the major version (Eg: 2.5.3 to 2.6.0)

 package-lock.json --> It will keep track of the exact version of the dev dependencies

 node-modules --> It has all the production code of the dependencies and dev dependencies

 Transitive Dependency --> Each dependency depends on the other (Eg: parcel depends upon babel and babel
 dependency on another)

.gitignore --> We can use gitignore to ignore node_modules to push into the repository

package and package-lock.json should be pushed into git repository and it can regenerate node_modules

----------------------------------------------------------------------------------------------------

# Igniting our app using npx

npx parcel index.html

----------------------------------------------------------------------------------------------------

# parcel
    Parcel documentation link - https://parceljs.org/

    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement (Changes will be reflected immediatedly)
    - File Watching Algorithm - written in C++
    - Caching - Faster Builds
    - Image Optimization
    - Minification (Minification involves removing unnecessary characters, such as whitespace, comments, and unused code, from the files, which can reduce the file size by up to 50%).
    - Bundling (With bundling, there are fewer resources that need to be rendered to the browser. With minification, the size of such resources is much smaller, often by as much as 70% or more).
    - Compressing (Compression involves encoding the files in a more compact format, such as gzip or brotli, which can reduce the file size by up to 90%).
    - Consistent Hashing
    - Code splitting
    - Differential Bundling (support old browsers)
    - Diagnostic 
    - Error Handling
    - Https
    - Tree Shaking (Remove Unused Code)
    - Different dev and prod bundles
---------------------------------------------------------------------------------------------------
# Production Build (*****Important one****)

--> Using Parcel, We need to remove "main":"App.js" and also do npx parcel build index.html

--> Production Ready files: index.html, index.7fb092a7.css , index.7dd0f1ae.js

--> To generate dev build, npx parcel index.html

--> Add these files /node_modules, /dist, /.parcel-cache in .gitignore because these files can be
regenerated using package.json and npx parcel build index.html (production build) and 
npx parcel index.html (development build)

-----------------------------------------------------------------------------------------------------

# Browsers List

It is used to check the lastest versions of the browsers and make it app compatible.

Add the changes in the package.json (browsersList)

Link: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

-------------------------------------------------------------------------------------------------------

# Add start and build in the scripts tag

--> npm start (equivalent to npm run start) to start the application

--> npm run build to build the application

-------------------------------------------------------------------------------------------------------

# JSX

--> JSX is a HTML like syntax, it's not HTML inside Javascript

--> Parcel with babel will transpile the code from JSX to the understandable code for the browser

--> JSX => React.CreateElement => ReactElement -JS Object => HMTL ELement (render)
    (Babel converts JSX into React.CreateElement)

--> Links: https://babeljs.io/

--------------------------------------------------------------------------------------------------------
# VS Code Extensions

--> Prettier - Code Formatter
--> Bracket Pair Colorization Toggler
--> ES Lint
--> Better Comments

--------------------------------------------------------------------------------------------------------
# React Functional Component

--> React functional component is a normal JS function which returns some JSX or returns some react element

--> Composing one component into the other (one component inside another) is called Component Composition

--> Inside {} we can write any javascript expression

--> JSX will sanitize the data inside the {} and also it prevents cross site scripting

---------------------------------------------------------------------------------------------
# Namaste Food

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - Restaurant Container
 *     - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

# Folder Structure

--> Components should be in one folder with Proper Case. For Eg: Header.js

--> Constants and mockData should be inside utils folder

# Two Types of Export/Import

- Default export/import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component } from "path";

--> We can have only one export default in a file, we can use named export. 
For eg: export const CDN_URL = "https://url"

--> When we have a named export, we need to import using {}. For Eg: import {CDN_URL} from constants.js

# Why React

--> Data and UI layer in sync with eachother

# React Hooks

--> It's a normal Javascript utility function
--> useState and useEffect - Most Powerful Hooks
--> useState - Superpowerful state variable in React and we need to do as named import
--> When state variable changes/useState updates, it will rerender the component/UI

# React Fiber

--> React Fiber finds the difference between two objects that's the reason react is very fast
--> Link: https://github.com/acdlite/react-fiber-architecture

# Monolith and Microservice Architecture

--> Monolith is big bulk project which has API, UI, Auth, Db, Notification
--> Microservice which has Backend, Frontend, Authentication, DB, notification
    (Each services are different) - Single Responsibility Principle, Separation of concerns

# Two Approaches to fetch Data

  --> First Approach
            -- Loads --> API (500ms) --> render
  --> Second Approach (It's the better approach for User experience)
            -- Loads --> Render the UI --> API --> Rerender the Data

# useEffect

  --> useEffect will be called only after the component renders

# Shimmer UI

  --> Load the fake page UI until we load the data from the API

# Const value getting updated

  --> The reason const value is getting updated in useState it's because react is rendering the component again and creates a new instance

# State updating
  --> Whenever state varibales update, react triggers a reconciliation cycle (re-renders the component)

# useEffect and useState

   --> If no dependency array ==> useEffect is called on every render
   --> If dependency array is empty  = [] => useEffect is called on initial render just once
   --> If dependency array is [btnNameReact] => called everytime btnNameReact is updated
   --> Never create a useState inside the if condition, forLoop and function

# Router
   --> Never use anchor <a></a> tag to route to new page, it will reload the page instead use <Link />

# Two types of Routing in Web Apps
  -- Client Side Routing
  -- Server Side Routing
  # Server Side Routing
    --> Make a network call and particular page comes from the server
  # Client Side Routing
    --> Doesn't make any network call loads the component page (It's a example of single page application)

# Dynamic Routing
    --> path:"/restaurants/:resId", resId will be unique and it has dynamic routing

# Class Based Component
   --> Loading a class based component, it's like initiating the class

# Lifecycle methods
   --> When a class is initiated, 
       Step 1: --> Constructor is called
       Step 2: --> Render is called
       Step 3: --> After the render, component is mounted, componentDidMount is called
       
       DOM Manipulation happens after completing constructor and render phase*** - React is optimizing it by updating the DOM at last

       Updating DOM is expensive and takes lot of time

   # updating phase:
     --> After the mounting phase, updating phase will get starts with setState --> render -->  React updates DOM and refs --> componentDidUpdate

  Link to refer Life cycle method : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

   # unmounting phase:
     --> While navigating to another component, unmounting should be done in that component. For Eg: clearing the setInterval in that component

  # Github user API link

  --> https://docs.github.com/en/rest/users?apiVersion=2022-11-28

  # debugger

  -->  We can use debugger to verify the code how component works (debugger;)

  # Single Responsibility Principle

  --> Each component should have only one responsibility for example restaurant card should
  have details only about the restaurant card

  # Emoji Symbol

  --> Windows Logo + semicolon; we get emojii in desktop

  # Optimizing/ bundling the apps even further
    There are different names like below: 
    we can call it as,
   --> App Chunking
   --> Code Splitting
   --> Dynamic Bundling
   --> Lazy Loading
   --> On demand Loading

   Eg: Make my trip use case, 
    --> For flights tab, we can have one main js file bundled
    --> For Hotels tab, we can have one main js file bundled

  Logically we are making it into smaller applications and the concept of lazy loading is that when we load the application, the particular page(For eg: Grocery) it won't load.
  Only when we click on the tab or go to the page, the particular page will get loaded

  Link to learn Lazy Loading: https://react.dev/reference/react/lazy
    --> Without Suspense, the above code throws an error in the webpage, because the component won't be loaded in the first instance as it is trying to render
  
  I can use lazy loading to make the application into different chunks

  # CSS
    --> Sass/scss - Writing CSS with super powers,little more advanced and it makes easy
    --> Styled components
    --> Bootstrap
    --> Material UI
    --> Chakara UI
    --> Ant Design
    --> Tailwind CSS
  
  # Tailwind CSS
    --> Link: https://tailwindcss.com/docs/installation/framework-guides
    --> Tailwind css with post CSS, postcss is a tool for transforming CSS with Javascript
    --> npx tailwindcss init gives a tailwind.config.js
    --> Create a .postcssrc file in your project root, and enable the tailwindcss plugin and also copy the contents from tailwind link
    --> Configure the tailwindcss template from the link, copy and paste it
    --> Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.
    --> Tailwind CSS intellisense is one of the best extension in VS code
    --> In VS code, if it's not showing suggestion we need to give ctrl+spacebar in keyboard
    --> Only import the class which is used into the app
    --> If whole application has m-4 then it will include only one time m-4 class
    --> Tailwind CSS is very lightweight

  # Higher Order Component
    --> HOC takes a component, enhance that component and returns the component
  
  # Ui and Data Layer
    --> Ui layer mostly consists of JSX
    --> Data layer(State, props, local variables, local storage) is very important in the UI application
    --> React Dev tools is one of the very useful extension for the development
    --> After installing React Dev tools, in console we can see components and profiler
    --> UI Layer(Virtual Dom) on the left and Data Layer(Props) on the right 
    --> Using Profiler, we can record our movements in the react page, we can also check how much time it takes for the components to load
  
  # Controlled and uncontrolled component
    --> When a component has its own state then it is called uncontrolled component
    --> When a child component is controlled by the parent component using state then it is controlled component
    
  # Lifting State Up
    --> Lifting the state up if we want to control the children by the parent component
    Eg: Accordian (Where when we open one accordian, the other accordian should close)
    Link: https://react.dev/learn/sharing-state-between-components
  
  # Props Drilling
    --> Passing props from parent component to multiple child component
  
  # React Context
    --> React Context avoids the props drilling in React, which keeps the global data and any component  can access
      Eg: Logged in User, Dark and light theme
    --> First we need to create context, then we need to use context
    --> Don't use context all over the places, do it when you need the data all over the application
    
  # Redux ToolKit
     --> Redux is not mandatory in the application. Only large application needs redux. Small-size/medium-size application is not needed redux
     --> React and Redux are two different libraries
     --> Use Redux wisely in your application
     --> Redux offers easy debugging
     --> Redux is not only library, there is also library which is gaining popularity. Eg: Zustand
     --> Redux is a predictable state container for JS Apps.
  
  # Redux workflow
    Write Flow -->  Click the Add button --> dispatch an action --> reducer function --> modify the slice of the redux store
    Read Flow --> From the store -->(Selector) Subscribing to the store --> updating the cart
    --> Subscribing to the store means "Sync with the Store"

  # Redux Toolkit Steps
   --> Install @reduxjs/toolkit and react-redux
   --> Build our store
   --> Connect our store to the app
   --> Create a cart slice
   --> Dispatch an action
   --> Read the data using selector



