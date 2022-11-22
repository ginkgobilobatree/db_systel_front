import "./App.css";
import Logo from "./img/DB-Systel-gmbh-logo.png";
import { useState } from "react";
import { handleChange } from "./utils/handleChange";
import { submit } from "./utils/submit";

export default function App() {
  const [input, setInput] = useState({ station1: "", station2: "" });
  const [result, setResult] = useState(false);

  const Picture = () => (
    <figure>
      <figcaption></figcaption>
      <img src={Logo} alt="logo db systel gmbh" />
    </figure>
  );
  const MockJSON = ({ result }) => (
    <article>
      <p>&#123;</p>
      <p id="stepRight">"from": <span>"{result.from}"</span>,</p>
      <p id="stepRight">"to": <span>"{result.to}"</span>,</p>
      <p id="stepRight">"distance": <span id="red">{result.distance}</span>,</p>
      <p id="stepRight">"unit": <span>"{result.unit}"</span></p>
      <p>&#125;</p>
    </article>
  );

  return (
    <main className="App">
      <section>
        {result ? <MockJSON result={result} /> : <Picture />}
        <form id="form">
          <input
            id="inputField"
            type="text"
            placeholder="von"
            name="station1"
            value={input.station1}
            onChange={(e) => handleChange(e, input, setInput)}
          />
          <input
            id="inputField"
            type="text"
            placeholder="nach"
            name="station2"
            value={input.station2}
            onChange={(e) => handleChange(e, input, setInput)}
          />
          <input
            id="send"
            type="submit"
            value="Berechne Distanz"
            onClick={(e) => submit(e, input, setInput, setResult)}
          />
        </form>
      </section>
    </main>
  );
}
