import React, { useState } from "react";
import styled from "styled-components";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    setErrors([]);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>

      <FormField>
        <Label htmlFor="password">Confirm Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>

      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 25px;
    opacity: 0.6;
  }
`;

const Label = styled.label`
  color: white;
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: #edfafd;
`;

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const FillButton = styled(ButtonBase)`
  background-color: white;
  color: darkblue;

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: darkblue;
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;
const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;

const COLORS = {
  primary: {
    "--main": "deepskyblue",
    "--accent": "white",
  },
  secondary: {
    "--main": "white",
    "--accent": "lightblue",
  },
};
