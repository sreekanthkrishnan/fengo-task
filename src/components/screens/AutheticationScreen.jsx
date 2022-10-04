import React, { useState } from "react";
import styled from "styled-components";
import LoginScreen from "../includes/LoginScreen";

function AutheticationScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        var passw = /^[A-Za-z]\w{7,14}$/;
        if (password.match(passw)) {
            alert("Success");
            console.log(username, password);
        } else {
            alert("Password don't match the requirement");
        }
    };

    return (
        <Container>
            <LoginScreen
                setUsername={setUsername}
                username={username}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </Container>
    );
}

export default AutheticationScreen;

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
