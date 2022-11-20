import "./App.css";
import Logo from "./img/DB-Systel-gmbh-logo.png";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState({station1:"", station2: ""});

  const handleChange = e => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value
    })
  };

  const submit = async () => {
    const response = await fetch(`/api/v1/distance/${input.station1}/${input.station2}`);
    const result = await response.json();
  }

  return (
    <main className="App">
      <section>
      <figure>
        <figcaption></figcaption>
        <img src={Logo} alt="logo db systel gmbh" />
      </figure>
      <form id="form" onSubmit={submit}>
          <input id="inputField" type="text" placeholder="Station 1" name="station1" value={input.station1} onChange={handleChange} />
          <input id="inputField" type="text" placeholder="Station 2" name="station2" value={input.station2} onChange={handleChange} />
        <input id="send" type="submit" value="Berechne Distanz"  />
      </form>
      <p>{input.station1}</p>
      <p>{input.station2}</p>
      </section>
    </main>
  );
}
