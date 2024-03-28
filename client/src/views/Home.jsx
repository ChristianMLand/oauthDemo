export default function Home() {
    return (
        <main class="container">
            <a className="oauthLink" href="http://localhost:8000/api/auth/google">
                <i class="fa-brands fa-google" />
                <span>Login with Google</span>
            </a>
            <span>OR</span>
            <a className="oauthLink" href="http://localhost:8000/api/auth/github">
                <i class="fa-brands fa-github" />
                <span>Login with Github</span>
            </a>
        </main>
    );
}