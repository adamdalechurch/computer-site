import React from "react";

export default function ParallaxBackground(props) {

  return (
    <div
      className="parallaxBgg"
      style={{
        background: `url('${props.bgImage}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // add opacity:
        minHeight: props.vhHeight + "vh",

        width: "100vw",
      }}>
      {props.children && props.children}
    </div>
  );
}
