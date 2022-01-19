import React, { useState } from "react";

import Layout from "../components/Layout/Layout";
import { Image, ItemList, List, Step, StepsContainer, Text } from "./styles";

const Help = () => {
  return (
    <Layout>
      <StepsContainer>
        <Step>
          <Text>
            1. Dirigete al repositorio de JetUML en GitHub:
            https://github.com/prmr/JetUML. Sigue los pasos que se mencionan en
            el readme para instalarlo.
          </Text>
          <Image src={require("../assets/step1.png")} />
        </Step>
        <Step>
          <Text>
            2. Una vez instalado JetUML, haz tu diagrama de clases. Para mayor
            información sobre el uso de JetUML, sigue la documentación:
            https://www.jetuml.org/docs/user-guide.html.
            <br />
            <br />
            <strong>Considerar:</strong>
            <br />
          </Text>

          <List>
            <ItemList>
              Tus atributos y métodos deben estar separados por un salto de
              línea.
            </ItemList>
            <ItemList>Escribe tus métodos y atributos sin espacios.</ItemList>
            <ItemList>
              Los métodos tienen que estar escritos con paréntesis. Ej:
            </ItemList>
            <ItemList>Los únicos métodos aceptados son:</ItemList>
            <List>
              <ItemList>
                add() (Para agregar o crear registro de esta entidad)
              </ItemList>
              <ItemList>
                edit() (Para editar un registro de esta entidad)
              </ItemList>
              <ItemList>
                delete() (Para eliminar un registro de esa entidad){" "}
              </ItemList>
            </List>
          </List>

          <Image src={require("../assets/step2.png")} />
        </Step>
        <Step>
          <Text>
            3. Cuando hayas creado tu diagrama de clases, dirigete a File > Save
            As
          </Text>
          <Image src={require("../assets/step3.png")} />
        </Step>
        <Step>
          <Text>
            4. Selecciona el tipo de archivo como "Todos los archivos"
          </Text>
          <Image src={require("../assets/step4.png")} />
        </Step>
        <Step>
          <Text>
            5. Escribe un nombre para tu archivo y asegurate de escribir la
            extensión .json
          </Text>
          <Image src={require("../assets/step5.png")} />
        </Step>
        <Step>
          <Text>
            6. Dirigite a Agora y presiona el botón que dice "Subir archivo"
          </Text>
          <Image src={require("../assets/step6.png")} />
        </Step>
        <Step>
          <Text>
            7. Selecciona el archivo que generaste con JetUML con extensión
            .json (IMPORTANTE)
          </Text>
          <Image src={require("../assets/step7.png")} />
        </Step>
        <Step>
          <Text>
            8. Verifica que el nombre a la par del botón sea el mismo de tu
            archivo
          </Text>
          <Image src={require("../assets/step8.png")} />
        </Step>
        <Step>
          <Text>
            9. En el apartado de resultados, tendrás las tablas que se generaron
            en base a tu diagrama UML. Cada tabla corresponde a una entidad en
            tu diagrama, aparecerán tantas funciones como métodos tiene tu
            diagrama, aunque al principio verás solo los encabezados de las
            tablas ya que no hay registros.
          </Text>
          <Image src={require("../assets/step9.png")} />
        </Step>
        <Step>
          <Text>
            10. Si tu entidad tiene el método add() entonces veras un formulario
            para agregar un registro, llenalo y da click en "Agregar".
          </Text>
          <Image src={require("../assets/step10.png")} />
        </Step>
        <Step>
          <Text>
            11. Al agregar un registro, si tu entidad tiene el método edit() o
            delete(), verás los botones correspondientes a esas funcionalidades
            en la columna "Actions".
          </Text>
          <Image src={require("../assets/step11.png")} />
        </Step>
        <Step>
          <Text>
            12. Si deseas editar un registro de una entidad que posea este
            método, presiona el botón de editar y verás que la información del
            registro se habilitará como editable. Edita la información que
            deseas, y presiona "Guardar", o bien, presiona "Cancelar" si deseas
            cancelar la edición
          </Text>
          <Image src={require("../assets/step12.png")} />
        </Step>
        <Step>
          <Text>
            13. Si deseas eliminar un registro de una entidad que posea este
            método, presiona el botón de eliminar y el registro será eliminado.{" "}
            <strong>
              CUIDADO: el registro se eliminará definitivamente y esta acción no
              es reversible.
            </strong>
          </Text>
          <Image src={require("../assets/step13.png")} />
        </Step>
      </StepsContainer>
    </Layout>
  );
};

export default Help;
