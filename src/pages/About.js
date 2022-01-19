import React from "react";
import Box from "../components/Box/Box";
import Layout from "../components/Layout/Layout";
import {
  Image,
  ImgWrapper,
  ProfileWrapper,
  Text,
  TextWrapper,
  Title,
} from "./styles";

const About = () => {
  return (
    <Layout>
      <Box txtAlgn="left" marginBottom="50px">
        <ProfileWrapper>
          <ImgWrapper>
            <Image src={require("../assets/profile1.jpg")} />
          </ImgWrapper>
          <TextWrapper>
            <Title>Karla Lopez</Title>
            <Text>
            Egresada de ingeniería informática, con conocimientos mayormente en JavaScript, C++, gestores de bases de datos como MySQL, Oracle y SQL management; 
            correo de contacto: 00058615@uca.edu.sv 
            </Text>
          </TextWrapper>
        </ProfileWrapper>
      </Box>
      <Box txtAlgn="left">
        <ProfileWrapper>
          <ImgWrapper>
            <Image src={require("../assets/profile2.jpg")} />
          </ImgWrapper>
          <TextWrapper>
            <Title>John Linares</Title>
            <Text>
            Egresado de ingeniería informática y conocimientos en desarrollo web en el framework VueJs y ASP.NET CORE, 
            Desarrollo de aplicaciones móviles en el framework Flutter, experiencia en uso de la plataforma firebase para base de datos NoSQL y SQL Server.
            correo de contacto: 00005016@uca.edu.sv
            </Text>
          </TextWrapper>
        </ProfileWrapper>
      </Box>
    </Layout>
  );
};

export default About;
