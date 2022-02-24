import React, { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import { Form, FormWrapper, InputWrapper, Label } from "./styles";
import { Button } from "../../styles/common";

import { DBRealtime } from '../../firebase-config';
import { ref, set } from 'firebase/database'

const AddForm = ({ entities, setEntities, entityName, attributes }) => {
  const [addFormData, setAddFormData] = useState({});

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
          ]
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

  useEffect(() => {
    Object.keys(entities).forEach(item => {
      const a1 = entities[item];
      const a2 = a1[a1.length -1];
      //console.log(a2.entityName + ' ' + a2.id + ' ' + a2);
      set(ref(DBRealtime, a2.entityName + '/' + a2.id), a2);
    });
    /*if (entities[Object.keys(entities)] != undefined) {
      let flag = true;
      const entitiesArr = entities[Object.keys(entities)]
      const actualEntity = entitiesArr[entitiesArr.length - 1]
      if(flag) {
        set(ref(DBRealtime, actualEntity.entityName + '/' + actualEntity.id), actualEntity);
        flag = false;
      }
    }*/
  }, [entities])

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
