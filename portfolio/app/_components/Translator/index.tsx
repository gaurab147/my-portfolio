"use client";

import React, { useState } from "react";
import styles from "./Translator.module.css";

const Translator: React.FC = () => {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [targetLang, setTargetLang] = useState("es");

  const handleTranslate = async () => {
    try {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: targetLang,
          format: "text",
        }),
      });

      const data = await res.json();
      setTranslated(data.translatedText);
    } catch (err) {
      console.error("Translation error", err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Translator</h2>

      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />

      <select
        className={styles.select}
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>

      <button className={styles.button} onClick={handleTranslate}>
        Translate
      </button>

      {translated && <p className={styles.result}>Translated: {translated}</p>}
    </div>
  );
};

export default Translator;
