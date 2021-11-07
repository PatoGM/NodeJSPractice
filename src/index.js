// import fetch from "node-fetch";
import promptSync from "prompt-sync";
const prompt = promptSync();

import AX from "axios";
const axios = AX;
 
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MyIsIm5iZiI6MTYzNjIzMzY4OSwiZXhwIjoxNjM4ODI1Njg5LCJpYXQiOjE2MzYyMzM2ODl9.JMW-W9UktIgigppNsURGRnWNQEfRhgsrqq_iQtZem4s";

// let permission = await fetch('https://api.aniapi.com/v1/user_story', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   });

let content_type = 'application/json';

let response = await axios
(
    {
    method: 'get',
    url: 'https://api.aniapi.com/v1/anime?title=The&nsfw=false',
    headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': content_type,
              'Accept': content_type
            }
    }
);

// console.log(prompt("Hello! "));

// console.log(response.data);

console.log(response.data.message);

let arr = response.data.data;

for (const item in arr)
{
    console.log(item);
}

console.log(arr.documents.length);

// console.log(permission.headers);