import React, { useState, useRef } from "react";
const container = {
  textAlign: "center",
};
const textarea = {
  width: "300px",
  height: "150px",
  margin: "10px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  resize: "none",
};
const button = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default function App() {
  const state = useState;
  let [val, setVal] = useState("");
  let fromLang = useRef("");
  let toLang = useRef("");
  const transfer = (myVal) => {
    setVal(myVal.target.value);
  };
  let [translation, setTranslation] = useState("");
  const print = () => {
    console.log(fromLang.current.value);
    console.log(toLang.current.value);
    let flang = fromLang.current.value.toString();
    let tlang = toLang.current.value.toString();

    //API start
    const data = "from=" + flang + "&to=" + tlang + "&text=" + val;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        setTranslation(JSON.parse(this.responseText).trans);
      }
    });

    xhr.open(
      "POST",
      "https://google-translate113.p.rapidapi.com/api/v1/translator/text"
    );
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "21317709f8mshf76800d620e30fdp179c4ejsnab0fef901ab0"
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Host",
      "google-translate113.p.rapidapi.com"
    );

    xhr.send(data);
  };

  return (
    <>
      <div className="container" style={container}>
        <h1>Translate360</h1>
        <br></br>
        <span>
          From :
          <select id="fromLang" ref={fromLang}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="ru">Russian</option>
            <option value="de">German</option>
            <option value="bn">Bengali</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ml">Malayalam</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
          </select>
        </span>
        &nbsp; &nbsp;
        <span>
          To:
          <select id="toLang" ref={toLang}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="ru">Russian</option>
            <option value="de">German</option>
            <option value="bn">Bengali</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ml">Malayalam</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
          </select>
        </span>
        <br></br>
        <textarea
          placeholder="Enter text to translate"
          style={textarea}
          onChange={transfer}
        ></textarea>
        <textarea
          placeholder="Translation will appear here"
          style={textarea}
          value={translation}
          disabled
        ></textarea>
        <br></br>
        <button style={button} onClick={print}>
          Translate
        </button>
      </div>
    </>
  );
}
