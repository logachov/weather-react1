import React from 'react';
//import ReactDOM from 'react-dom/client';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Container from "./Container";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Container />
  </StrictMode>
);
