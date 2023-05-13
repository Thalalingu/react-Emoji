import React, { useState } from 'react';
import './style.css';
import Emojidata from './Emoji.json';
export default function App() {
  const [search,setSearch] = useState("")
  return (
    <div>
      <p>hiiiujjji</p>
      <input type="text" value={search} onChange={
        (e)=> {setSearch(e.target.value)}}/>
      {Emojidata.filter((item) => item.title
      .toLowerCase().includes(search)).map((item) => (
        <li>{item.symbol}{item.title}</li>
      ))}
    </div>
  );
}
