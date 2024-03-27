import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [user, setUser] = useState({});
    const nav = useNavigate();

    const handleLogout = () => {
        axios.delete("http://localhost:8000/api/auth", { withCredentials: true })
            .then(() => nav("/"))
            .catch(console.error);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/auth", { withCredentials: true })
            .then(({ data }) => {
                console.log(data);
                setUser(data)
            })
            .catch(console.error);
    }, [])

    return (
        <main>
            <h1>Dashboard Test</h1>
            <h2>Welcome, {user.username}</h2>
            <button onClick={handleLogout}>Logout</button>
        </main>
    )
}