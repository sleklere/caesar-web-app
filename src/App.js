import { useState } from "react";
import styles from "./App.module.css";
import CaesarForm from "./Components/CaesarForm";
import caesar from "./scripts/caesar";

function App() {
  const [output, setOutput] = useState("Your output text");

  const handleForm = function (formData) {
    const { encrypt: encryptOrDecrypt, text, keyNumber } = formData;
    setOutput(caesar(encryptOrDecrypt, keyNumber, text));
  };

  return (
    <div className={styles.app}>
      <div className={styles["main-container"]}>
        <h1 className={styles.title}>Caesar Cipher</h1>
        <CaesarForm onSubmitForm={handleForm} />
        <div className={styles["output-div"]}>
          <p className={`${styles["output-title"]}`}>OUTPUT:</p>
          <p className={styles.output}>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
