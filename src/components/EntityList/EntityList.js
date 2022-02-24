import React, { useState } from "react";

import AddForm from "../AddForm/AddForm";
import EntityItem from "./EntityItem";
import { EntityItemContainer, Text, TextWrapper, Message } from "./styles";

const EntityList = ({ data }) => {
  const [entities, setEntities] = useState({});

  //console.log(diagram, "diagram");
  //console.log(data, "data");

  //console.log(entities, "contacts");

  const formatProperties = (properties) => {
    const propertiesArr = properties.split("\n");
    const index = propertiesArr.indexOf("");
    if (index > -1) propertiesArr.splice(index, 1);
    return propertiesArr;
  };

  return (
    <div>
      <TextWrapper>
        <Text>Resultados</Text>
      </TextWrapper>

      {data ? (
        data.nodes.map(({ name, methods, attributes }) => {
          const formatedAttributes = formatProperties(attributes);
          const formatedMethods = formatProperties(methods);

          return formatedMethods.find(
            (method) => method.toLowerCase() === "read()"
          ) ? (
            <EntityItemContainer>
              <EntityItem
                name={name}
                methods={formatedMethods}
                attributes={formatedAttributes}
                entities={entities}
                setEntities={setEntities}
              />

              {formatedMethods.find(
                (method) => method.toLowerCase() === "add()"
              ) ? (
                <AddForm
                  entities={entities}
                  setEntities={setEntities}
                  attributes={formatedAttributes}
                  entityName={name}
                />
              ) : (
                <></>
              )}
            </EntityItemContainer>
          ) : (
            <Message>
              <p>Esta tabla no tiene la propiedad read()</p>
            </Message>
          );
        })
      ) : (
        <Message>
          <p>No hay entidades</p>
        </Message>
      )}
    </div>
  );
};

export default EntityList;
