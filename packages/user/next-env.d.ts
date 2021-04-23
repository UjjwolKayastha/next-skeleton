/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module "*.svg" {
  import React from "react";
  export default JSX.IntrinsicElements.svg;
}
