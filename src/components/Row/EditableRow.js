import React, { useState } from "react";
import { Button } from "../../styles/common";

const EditableRow = ({
  setEntityInstanceID,
  editFormData,
  setEditFormData,
  entity,
}) => {
  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancelClick = () => {
    setEntityInstanceID(null);
  };

  return (
    <tr>
      {Object.keys(entity).map((key) =>
        key !== "entityName" ? (
          <td>
            <input
              type="text"
              required="required"
              placeholder={`Ingresa ${key}`}
              name={key}
              value={editFormData[key]}
              onChange={handleEditFormChange}
            ></input>
          </td>
        ) : (
          <></>
        )
      )}
      <td>
        <Button marginRight type="submit">
          Guardar
        </Button>
        <Button type="button" color="red" onClick={handleCancelClick}>
          Cancelar
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
