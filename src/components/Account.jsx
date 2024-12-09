/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function AccountInfo({ setToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [books, setBooks] = useState("");
  const [error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);



async function handleSubmit(event) {
    event.preventDefault();

    if (!username || !email) {
        setError('Please enter your username or email, followed by your password.');
    }
}

try {
    const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
});

const data = await response.json();


  }
};