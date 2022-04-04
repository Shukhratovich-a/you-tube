import useToken from "./Hooks/useToken";

const UnAutentificationApp = () => {
  const [setIsLoggedIn] = useToken(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (data?.token) {
      setIsLoggedIn(data?.token);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type={"text"} placeholder="Enter Email" name="email" />
      <input type={"password"} placeholder="Enter Password" name="password" />

      <button className="form__button" type={"submit"}>
        Submit
      </button>
    </form>
  );
};
export default UnAutentificationApp;
