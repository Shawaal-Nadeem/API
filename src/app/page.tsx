'use client'
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  useEffect(() => {

                                 //Read
    // async function getApi()
    // {
    //   const api = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
    //   const json = await api.json();
    //   console.log(json);
    // }
    // getApi();


                             //Create
    // async function postApi()
    // {
    //   const api = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       userId: 5,
    //       title: 'Rich Dad and Poor Dad',
    //       completed: true
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   });
    //   const json = await api.json();
    //   console.log(json);
    // }
    // postApi();


                                 //Update Object
    // async function putApi()
    // {
    //   const api = await fetch(`https://jsonplaceholder.typicode.com/todos/2`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       userId: 5,
    //       title: 'Poor Dad and Rich Dad',
    //       completed: false
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   });
    //   const json = await api.json();
    //   console.log(json);
    // }
    // putApi();


                                 //Update Specific Attribute    
    // async function patchApi()
    // {
    //   const api = await fetch(`https://jsonplaceholder.typicode.com/todos/3`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //       title: 'Web 3.O & Metaverse',
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   });
    //   const json = await api.json();
    //   console.log(json);
    // }
    // patchApi();


                                 //Delete
    async function deleteApi()
    {
      const api = await fetch(`https://jsonplaceholder.typicode.com/todos/3`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await api.json();
      console.log(json);
    }
    deleteApi();
    
  }, [])
  
  
  return (
    <div>Welcome to Home Page</div>
  )
}
