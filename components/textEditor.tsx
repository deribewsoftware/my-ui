"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
 const TextEditor = () => {
  const [value, setValue] = useState('');

  return <ReactQuill className='border rounded-lg focus:border-blue-600' theme="bubble" value={value} onChange={setValue} placeholder='Write Here the Contents ' />;
 }
  
 export default TextEditor;