import "./App.css";
import Logo from "./img/DB-Systel-gmbh-logo.png";
import { useState } from "react";
import { handleChange } from "./utils/handleChange";
import { submit } from "./utils/submit";

export default function App() {
  
  const [input, setInput] = useState({ station1: "", station2: "" });
  const [result, setResult] = useState(false);

  return (
    <main className="App">
      <section>
        <figure>
          <figcaption></figcaption>
          <img src={Logo} alt="logo db systel gmbh" />
        </figure>
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
      {/* {result && <p>&#123;"from": "{result.from}", "to": "{result.to}", "distance": {result.distance}, "unit": "{result.unit}"&#125;</p>} */}
    </main>
  );
}
