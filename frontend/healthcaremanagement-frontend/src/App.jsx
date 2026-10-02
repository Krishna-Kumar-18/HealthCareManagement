import { useState } from "react";
import { login, getCurrentUser } from "./services/authService";

function App() {
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        try {
            const data = await login(
                "test@gmail.com",
                "123456"
            );

            localStorage.setItem("token", data.Token);

            console.log("Login response:", data);

            setMessage("Login successful");
        } catch (error) {
            console.error(error.response?.data ?? error.message);
            setMessage("Login failed");
        }
    };

    const handleGetUser = async () => {
        try {
            const data = await getCurrentUser();

            console.log("Current user:", data);

            setMessage(data.message);
        } catch (error) {
            console.error(error.response?.data ?? error.message);
            setMessage("Protected API failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-black">

            <button
                onClick={handleLogin}
                className="rounded bg-blue-600 px-6 py-3 text-white"
            >
                Login
            </button>

            <button
                onClick={handleGetUser}
                className="rounded bg-green-600 px-6 py-3 text-white"
            >
                Get Current User
            </button>

            <p>{message}</p>

        </div>
    );
}

export default App;