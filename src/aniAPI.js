const {fetch} = require("../main");

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MyIsIm5iZiI6MTYzNjIzMzY4OSwiZXhwIjoxNjM4ODI1Njg5LCJpYXQiOjE2MzYyMzM2ODl9.JMW-W9UktIgigppNsURGRnWNQEfRhgsrqq_iQtZem4s";

let permission =   fetch('https://api.aniapi.com/v1/user_story', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  console.log(permission);