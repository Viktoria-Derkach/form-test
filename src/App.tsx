import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Form } from "./components";
import { IReviewForm } from "./components/Form/Form.interface";
import { SelectEnum } from "./components/SelectPayment/SelectPayment.props";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const defaultValues: IReviewForm = {
    name: "Viktoria",
    EIN: "12-3456789",
    notes: "I am a new user",
    paymentMethod: SelectEnum.Cash,
  };

  const handleOpen = (isEdit: boolean) => {
    setIsEdit(isEdit);
    setIsOpened(true);
  };

  return (
    <div className={styles.app}>
      {isOpened && (
        <div className={styles.layout}>
          <Form
            isOpened={isOpened}
            defaultValues={isEdit ? defaultValues : undefined}
            setIsOpened={setIsOpened}
          />
        </div>
      )}
      <div className={styles.buttons}>
        <Button appearance="white" onClick={() => handleOpen(true)}>
          Edit
        </Button>
        <Button appearance="primary" onClick={() => handleOpen(false)}>
          Open
        </Button>
      </div>
    </div>
  );
}

export default App;
