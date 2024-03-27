import { useAuthContext } from '~/util';

export default function Home() {
    const { user, logout } = useAuthContext();

    if (!user) return <h1>Loading...</h1>;

    return (
        <main>
            <h1>Dashboard Test</h1>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
        </main>
    )
}