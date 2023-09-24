import React from 'react';
import "./App.css";;

export default function App() {
  return (
    <div id='container'>
          <div id='main'>
            <form id='form'>
              <input type='text' placeholder='Enter Location' />
              <button type='submit'>Search</button>
            </form>
            <div id="display">
              
            </div>
          </div>
    </div>
  )
}
