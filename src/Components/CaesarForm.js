import styles from "./CaesarForm.module.css";

function CaesarForm(props) {
  const handleCaesarForm = function (e) {
    e.preventDefault();
    props.onSubmitForm();
  };

  return (
    <form className={styles["caesar-form"]} onSubmit={handleCaesarForm}>
      <label htmlFor="encrypt-decrypt">
        Choose action
        <select>
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
        <input type="text" />
      </label>
      <label htmlFor="key-number">
        Enter your key number
        <input type="number" />
      </label>
      <button type="submit" className={`${styles["btn-form"]}`}>
        Run
      </button>
    </form>
  );
}

export default CaesarForm;
