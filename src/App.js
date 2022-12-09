import { useState } from "react";
import styles from "./App.module.css";
import CaesarForm from "./Components/CaesarForm";

function App() {
  const [output, setOutput] = useState("Your output text");

  const handleForm = function (formData) {
    setOutput(formData.output);
  };

  return (
    <div className={styles.app}>
      <div className={styles["main-container"]}>
        <h1 className={styles.title}>Caesar Cipher</h1>
        <CaesarForm onSubmitForm={handleForm} />
        <div className={styles.output}>
          <p className={`${styles["output-title"]}`}>OUTPUT:</p>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
