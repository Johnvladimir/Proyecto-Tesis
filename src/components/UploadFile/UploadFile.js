import React, { useState } from "react";
import { Button } from "../../styles/common";
import { Text, Wrapper } from "./styles";

const UploadFile = () => {
  const [json, setJSON] = useState(null);

  console.log(json, "archivo");

  const onFileChange = (e) => {
    // Update the state
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setJSON(JSON.parse(e.target.result));
    };
  };
  return (
    <Wrapper>
      <Text>Sube un archivo .json</Text>
      <input type="file" onChange={onFileChange} />
      <Button>Subir archivo</Button>
    </Wrapper>
  );
};

export default UploadFile;
