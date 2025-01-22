import * as React from 'react';
import { Img } from "@react-email/components";

export const EmailTemplate = ({ firstName }) => {
  return (
    <div>
      <h1>Hi {firstName}</h1>
      <h3>Your product has been delivered</h3>
      <p>Your feedback is important to us.</p>
      <button className="">
        View Product
      </button>
      <Img src='/logo.svg' alt="Cat" width="300" height="300" />;
    </div>
  );
};
