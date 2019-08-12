# hooks-not-working

React repo for ticket: https://stackoverflow.com/questions/57455200/cant-use-hooks-with-my-react-component-library-invariant-violation-invalid-hoo

I've been trying to create my own Component Library for the past few weeks, everything is going smooth except from the fact that I can't get hooks to work.

I would expect it's something about React being duplicated which I don't see  when I run `npm ls react`. 

Im using `npm link` to test the functioning of the library but also I can deploy it to GitHub and `npm update` it.

I've added `window.React1 = require('react');` in node_modules/react-dom/index.js (in the App that uses my library).
And
```
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1);
  console.log(window.React1 === window.React2);
``` 
in my App.js (in the app that uses my library).

And it throws `true`. I'm slowly getting clueless. Any ideas?


The code where I'm trying to use Hooks is:

    import React, {useEffect} from 'react';

    export const Test = () => {
        useEffect(()=>{
            console.log("component did mount");
        } , [])
        return(<div>Hola!</div>);
    }


When I build `yarn webpack --mode development` it throws **'require is not defined'**.




