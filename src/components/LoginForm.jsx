import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";

const LoginForm = ({ setIsLoggedIn, setError, error }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication
        if (email === "admin@zeal.com" && password === "1234") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <Card>
            <h2>Zeal Industries Login</h2>

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <Button text="Login" />
            </form>
        </Card>
    );
};

export default LoginForm;