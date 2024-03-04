"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
 const TextEditor = () => {
  const [value, setValue] = useState('');
  const valueData="<p>my name is <h1>Deribew</h1> Shimelis I live in Addis Ababa </p>"

  return <><ReactQuill  className='border text-lg rounded-lg focus:border-blue-600' theme="bubble" value={value? value:valueData}   onChange={setValue} placeholder='Write Here the Contents ' />
  <div className="">{value}</div>
  </>;
 }
  
 export default TextEditor;