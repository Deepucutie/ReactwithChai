import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'

function MyApp()
{
  return (
    <div>

      <h1>Custom app  !</h1>
    </div>
  )

}
/*const reactElement={
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  childern: 'Click me to vist google'
}*/

const anotherElement=
(
  <a href="http://google.com" target='_blank'>Visit google</a>
)

const anotherUser="Chai aur react"

const reactElement = React.createElement(
'a',
{
 href: 'https://google.com',target:'_blank'},
 'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
reactElement 
)

