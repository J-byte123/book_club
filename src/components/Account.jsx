/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function AccountInfo({ setToken }) {
  
  const [books, setBooks] = useState("");
  const [error, setError] = useState(null);
}

return (
    <div>
        <h2>Welcome {user.email}</h2>
    </div>
)