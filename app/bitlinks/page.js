"use client"
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';




export default function page() {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [users, setUsers] = useState([]);


    function generate() {
        if (url && shorturl) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "url": url,
                "shorturl": shorturl,
                "id": uuidv4()
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("/api/generate", requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(result)
                    alert(result)
                    seturl('')
                    setshorturl('')
                })
                .catch((error) => console.error(error));
        }
        else {
            alert('Please Enter URL')
        }

        fetch('/api/generate')
            .then(res => res.json())
            .then(data => setUsers(data));
    }
    return (
        <>
            <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
                <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col gap-2'>
                    <input type="text"
                        value={url}
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        placeholder='Enter your URL'
                        onChange={(e) => { seturl(e.target.value) }}
                    />

                    <input type="text"
                        value={shorturl}
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        placeholder='Enter your preferred short URL text'
                        onChange={(e) => { setshorturl(e.target.value) }}
                    />
                    <button style={{ cursor: 'pointer' }} onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
                </div>
                <div>
                    h
                </div>
            </div>
        </>
    )
}
