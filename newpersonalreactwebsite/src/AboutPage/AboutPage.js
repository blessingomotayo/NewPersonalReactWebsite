import React from "react";
import "./AboutPage.css";
import "@shopify/polaris/dist/styles.css";
import { DisplayText, TextStyle } from "@shopify/polaris";


export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="VerticalLine"/>
      <div className="Title">
        <DisplayText size="medium" element="h2">About me</DisplayText>
      </div>
      <div className="Description">
        <TextStyle variation="subdued">I love creating products that solve customer pain points. 
          Products that provide solutions to real world problems. I am able to learn, grow and learn from talented individuals 
          who also care about solving real world problems while also creating an amazing user experience along the way. 
          I seek opportunities that will allow me to use my skills as well as build upon them to make the world better for 
          the new generation. I am hard working, patient and willing to learn in any way I can and I am ready to take on my 
          next big challenge. 
          
          Thank you and feel free to contact me!
        </TextStyle>
      </div>
      <div className="VerticalLine"/>
    </div>
  )
};
