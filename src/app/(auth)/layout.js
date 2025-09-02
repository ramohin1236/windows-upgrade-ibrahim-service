import React from "react";
import "../globals.css";

const AuthLayout = ({ children }) => {
  return (
    <html >
      <body>
        <div >{children}</div>
      </body>
    </html>
  );
};

export default AuthLayout;