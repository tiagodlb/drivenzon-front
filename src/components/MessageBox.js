import React from "react";
import styled from "styled-components";

export default function MessageBox(props) {
  return (
    <>
      <div className={`alert alert-${props.variant || `info`}`}>{props.children}</div>
    </>
  );
}
