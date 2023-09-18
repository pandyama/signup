import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

export type propsType = {
  size: string;
};

function TextInput({ size }: propsType) {
  return (
    <div className={styles.inputDiv}>
      <div className={styles.inputLabel}>
        <pre>Username</pre>
      </div>
      {/* <label>Username</label> */}
      <input type="text" className={styles.inputField}></input>
    </div>
  );
}

export default TextInput;
