"use client"
import React, { useState, useEffect } from 'react'
import '@/app/apidata/style.css'


function page() {


  const [searchTerm, setSearchTerm] = useState('');
  const [data, setdata] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/getdata"); // or any external URL
      const json = await res.json();
      setdata(json);
    };
    getData();
  }, []);

   const filteredItems = data.filter(item =>
        item.shorturl.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>

      <table>
        <caption>URL List</caption>
        <caption>
          <input 
          type="text" 
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder='Search...' 
          className='p-5 h-9 w-[500px] bg-purple-100 rounded-3xl'
          />
        </caption>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        {filteredItems.map((d, i) => {
          return (
            <tbody>
              <tr>
                <td>{i + 1}</td>
                <td>{d.url}</td>
                <td><a target='_blank' href={d.url}>{d.shorturl}</a></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default page