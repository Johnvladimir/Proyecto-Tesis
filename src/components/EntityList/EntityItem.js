import React, { useState } from "react";

import Table from "../Table/Table";

import { DBRealtime } from '../../firebase-config';
import { ref, set, remove, update } from 'firebase/database'

const EntityItem = ({ name, methods, attributes, entities, setEntities }) => {
  const [editFormData, setEditFormData] = useState({});
  const [entityInstanceID, setEntityInstanceID] = useState(null);
  //const [editEntityName, setEditEntityName] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const newEntities = { ...entities };
    const index = newEntities[name].findIndex(
      (entity) => entity.id === entityInstanceID
    );
    newEntities[name][index] = { id: entityInstanceID, ...editFormData };
    setEntities(newEntities);
    setEntityInstanceID(null);
  };

  const handleEditClick = (event, entity) => {
    event.preventDefault();
    setEditFormData(entity);
    //console.log(entity.entityName);
    setEntityInstanceID(entity.id);
    //setEditEntityName(entity.entityName);
    update(ref(DBRealtime,entity.entityName + '/' + entity.id));
  };

  const handleDeleteClick = (id) => {
    const newEntities = { ...entities };
    const index = entities[name].findIndex((c) => c.id === id);
    Object.keys(newEntities).forEach(item => {
      remove(ref(DBRealtime, item + '/' + id));
    });
    newEntities[name].splice(index, 1);
    setEntities(newEntities);
  };

  return (
    <Table
      name={name}
      attributes={attributes}
      entities={entities}
      entityInstanceID={entityInstanceID}
      setEntityInstanceID={setEntityInstanceID}
      editFormData={editFormData}
      handleEditFormSubmit={handleEditFormSubmit}
      setEditFormData={setEditFormData}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
      methods={methods}
    />
  );
};

export default EntityItem;
