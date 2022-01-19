import React from "react";
import { Button } from "../../styles/common";
import IconBtn from "../IconBtn/IconBtn";

const ReadOnlyRow = ({
  entity,
  handleEditClick,
  handleDeleteClick,
  methods,
}) => {
  const editIcon = require("../../assets/edit-icon.png");
  const deleteIcon = require("../../assets/delete-icon.png");
  return (
    <tr>
      {Object.keys(entity).map((key) =>
        key !== "entityName" ? <td key={key}>{entity[key]}</td> : <></>
      )}
      <td>
        {methods.find((method) => method.toLowerCase() === "edit()") ? (
          <Button marginRight onClick={(e) => handleEditClick(e, entity)}>
            Editar
          </Button>
        ) : (
          <></>
        )}
        {methods.find((method) => method.toLowerCase() === "delete()") ? (
          <Button color="red" onClick={() => handleDeleteClick(entity.id)}>
            Eliminar
          </Button>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
