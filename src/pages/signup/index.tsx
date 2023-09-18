import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";
import TextInput from "../../ui/TextInput";

export type propsType = {
  size: string;
};

function SignUp({ size }: propsType) {
  return (
    <div className={styles.inputDiv}>
      <TextInput size="M" />
      <TextInput size="M" />
    </div>
  );
}

export default SignUp;
