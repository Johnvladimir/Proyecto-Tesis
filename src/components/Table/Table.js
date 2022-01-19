import React, { useState } from "react";

import ReadOnlyRow from "../Row/ReadOnlyRow";
import EditableRow from "../Row/EditableRow.js";
import {
  Row,
  TableContainer,
  TableUI,
  TableWrapper,
  THead,
  Title,
  TitleWrapper,
} from "./styles";

const Table = ({
  name,
  attributes,
  entities,
  entityInstanceID,
  setEntityInstanceID,
  editFormData,
  handleEditFormSubmit,
  setEditFormData,
  handleEditClick,
  handleDeleteClick,
  methods,
}) => {
  const renderRow = () => {
    if (Object.keys(entities).length > 0) {
      return entities.hasOwnProperty(name) ? (
        entities[name].map((entity) => {
          return entityInstanceID === entity.id ? (
            <EditableRow
              key={entity.id}
              editFormData={editFormData}
              setEditFormData={setEditFormData}
              setEntityInstanceID={setEntityInstanceID}
              entity={entity}
            />
          ) : (
            <ReadOnlyRow
              key={entity.id}
              entity={entity}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              methods={methods}
            />
          );
        })
      ) : (
        <></>
      );
    }
  };

  return (
    <TableContainer className="table-container">
      <TitleWrapper className="table-title-wrapper">
        <Title>{name}</Title>
      </TitleWrapper>
      <form onSubmit={handleEditFormSubmit}>
        <TableWrapper>
          <table>
            <THead>
              <tr>
                <th>ID</th>
                {attributes.map((attribute) =>
                  attribute.toLowerCase() !== "id" ? <th>{attribute}</th> : null
                )}
                <th>Actions</th>
              </tr>
            </THead>
            <tbody>{renderRow()}</tbody>
          </table>
        </TableWrapper>
      </form>
    </TableContainer>
  );
};

export default Table;
