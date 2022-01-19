import React, { useState } from "react";
import Box from "../components/Box/Box";
import EntityList from "../components/EntityList/EntityList";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/Navbar/Navbar";
import UploadFile from "../components/UploadFile/UploadFile";
import {
  Wrapper,
  Text,
  InputFile,
  InputFileWrapper,
} from "../components/UploadFile/styles";
import { Button } from "../styles/common";
import { BoxText, TextDanger } from "./styles";

const Home = () => {
  const [file, setFile] = useState(null);
  const [json, setJSON] = useState(null);

  console.log(file, "archivo");

  const onFileChange = (e) => {
    // Update the state
    setFile(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setJSON(JSON.parse(e.target.result));
    };
  };

  const validateFileName = () => {
    if (file) {
      if (file.name.match(".json$", "i")) {
        return <Text>{file.name}</Text>;
      } else {
        return (
          <TextDanger>
            No es un archivo .json. Porfavor vuelve a intentarlo con un archivo
            .json
          </TextDanger>
        );
      }
    } else {
      return <Text>Sube un archivo .json</Text>;
    }
  };

  return (
    <Layout>
      <Box>
        <BoxText>Crea interfaces desde diagramas UML fácil y rápido</BoxText>
        <Button>Comienza ya</Button>
      </Box>
      <Wrapper>
        {validateFileName()}
        <InputFileWrapper>
          <InputFile type="file" onChange={onFileChange} />
          <p>Subir archivo</p>
        </InputFileWrapper>
      </Wrapper>
      {file?.name.match(".json$", "i") && <EntityList data={json} />}
    </Layout>
  );
};

export default Home;
