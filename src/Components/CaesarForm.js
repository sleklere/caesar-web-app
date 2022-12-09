import { useRef } from "react";
import styles from "./CaesarForm.module.css";

function CaesarForm(props) {
  const selectValue = useRef();
  const inputText = useRef();
  const keyNumberInput = useRef();

  const handleCaesarForm = function (e) {
    e.preventDefault();
    const selectOption = selectValue.current.value;
    const text = inputText.current.value;
    const keyNumber = +keyNumberInput.current.value;
    props.onSubmitForm({
      encrypt: selectOption === "encrypt" ? true : false,
      text,
      keyNumber,
    });
  };

  return (
    <form className={styles["caesar-form"]} onSubmit={handleCaesarForm}>
      <label htmlFor="encrypt-decrypt">
        Choose action
        <select ref={selectValue}>
          <option value="encrypt" id="encrypt-decrypt">
            Encrypt
          </option>
          <option value="decrypt" id="encrypt-decrypt">
            Decrypt
          </option>
        </select>
      </label>
      <label htmlFor="input-text">
        Enter your text
        <input ref={inputText} type="text" />
      </label>
      <label htmlFor="key-number">
        Enter your key number
        <input ref={keyNumberInput} type="number" />
      </label>
      <button type="submit" className={`${styles["btn-form"]}`}>
        Run
      </button>
    </form>
  );
}

export default CaesarForm;
