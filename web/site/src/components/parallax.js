import React from "react"
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
export default function ParallaxBackground(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const resize = () => {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }
  , []);

  return (
    <div
      className="parallaxBgg"
      style={{
        // background: `url('${props.bgImage}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: screenSize > 800 ? "50%" : "auto 80%",
        // add opacity:
        minHeight: props.vhHeight + "vh",
        height: "100%",
        width: "100vw",
      }}>
      <Container>
        {props.children && props.children}
      </Container>
    </div>
  );
}
