import React from "react";
import "./LandingPage.css";
import "@shopify/polaris/dist/styles.css";
import { DisplayText, TextStyle, Button, Stack } from "@shopify/polaris";


export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="ImageSection">
        <Stack wrap={false}>
          <div className="DarkSquare"/>
          <div className="LandingPageVerticalLine"/>
          <div className="Name">Blessing</div>
          <div className="img"/>
        </Stack>
      </div>
      <Stack vertical>
        <DisplayText size="extraLarge">Welcome</DisplayText>
        <div className="LandingPageDescription">
        <TextStyle variation="subdued">This website includes a brief summary about blessing, current and previous work 
            experiences and some of the many languages she’s picked up from school as well as working with 
            talented people in the work force. Thank you for visiting and feel free to contact her. Details 
            are in her resume.
        </TextStyle>
        </div>
        <Button>Learn more</Button>
      </Stack>
    </div>
  )
};
