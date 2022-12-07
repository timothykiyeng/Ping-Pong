import React, {useState} from "react";

function LoginForm({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, confirmPassword }),
        })
          .then((r) => {
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>

          <FormField>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="confirm-password"
              id="confirm-password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormField>

            <Button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </Button>

          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      );

}
export default LoginForm;
