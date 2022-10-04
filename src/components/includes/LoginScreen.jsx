import React from "react";
import styled from "styled-components";

function LoginScreen({
    setPassword,
    setUsername,
    password,
    username,
    handleSubmit,
}) {
    const hangleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };
    const handleBlur = (e) => {};
    return (
        <Conatiner>
            <Title>Login</Title>
            <Form>
                <EmailField
                    placeholder="Enter your username"
                    value={username}
                    name="username"
                    type="text"
                    onChange={hangleChange}
                    onBlur={handleBlur}
                />
                <PasswordField
                    placeholder="Enter your password"
                    value={password}
                    name="password"
                    type="password"
                    onChange={hangleChange}
                    onBlur={handleBlur}
                />
                <Button type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Conatiner>
    );
}

export default LoginScreen;
const Conatiner = styled.div`
    width: 500px;
    margin: 0 auto;
    padding: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Title = styled.h1`
    font-family: gordita_medium;
    margin-bottom: 30px;
`;
const Form = styled.form`
    display: block;

    input {
        display: block;
        width: 100%;
        height: 40px;
        border: 1px solid #00000058;
        margin-bottom: 20px;
        padding: 0 20px;
    }
`;
const EmailField = styled.input``;
const PasswordField = styled.input``;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #8c8a8a;
    color: #fff;
    cursor: pointer;
    font-family: gordita_medium;
`;
