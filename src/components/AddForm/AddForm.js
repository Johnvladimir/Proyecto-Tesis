import React, { useState } from "react";

import { nanoid } from "nanoid";
import { Form, FormWrapper, InputWrapper, Label, Title } from "./styles";
import { Button } from "../../styles/common";

<<<<<<< HEAD
=======
import { DBRealtime } from '../../firebase-config';
import { ref, set, onValue, update, remove } from 'firebase/database'

>>>>>>> master
const AddForm = ({ entities, setEntities, entityName, attributes }) => {
  const [addFormData, setAddFormData] = useState({});

  console.log(addFormData, "addFormData");

  const clearData = () => {
    const clearObj = {};
    const keys = Object.keys(addFormData);

    keys.forEach((key) => (clearObj[key] = ""));

    setAddFormData(clearObj);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (entities.hasOwnProperty(entityName)) {
      addFormData.hasOwnProperty("id" || "ID" || "Id")
        ? setEntities({
            ...entities,
            [entityName]: [
              ...entities[entityName],
              { entityName: entityName, ...addFormData },
            ],
          })
        : setEntities({
            ...entities,
            [entityName]: [
              ...entities[entityName],
              { id: nanoid(), entityName: entityName, ...addFormData },
            ],
          });
    } else {
      addFormData.hasOwnProperty("id" || "ID" || "Id")
        ? setEntities({
            ...entities,
            [entityName]: [{ entityName: entityName, ...addFormData }],
          })
        : setEntities({
            ...entities,
            [entityName]: [
              { id: nanoid(), entityName: entityName, ...addFormData },
            ],
          });
    }

    clearData();
  };
  return (
    <FormWrapper>
      {/* <Title>{`Agregar ${entityName}`}</Title> */}
      <Form onSubmit={handleAddFormSubmit}>
        {attributes.map((attribute) => (
          <InputWrapper>
            <Label>{attribute}</Label>
            <input
              type="text"
              name={attribute}
              value={addFormData[attribute]}
              required="required"
              placeholder={`Ingresa ${attribute}`}
              onChange={handleAddFormChange}
            />
          </InputWrapper>
        ))}
      </Form>
      <Button type="submit" onClick={handleAddFormSubmit}>
        Agregar
      </Button>
    </FormWrapper>
  );
};

export default AddForm;
