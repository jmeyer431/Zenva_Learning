import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
  return(
    <div>Hello World!</div>
  );
}

// function Hello(){
//   return React.createElement(
//     'div',
//     {}
//     'Hello World!'
//   );
// }

ReactDOM.render(
  <HelloWorld/>, document.querySelector('#root')
);