import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
};

export default AuthLayout;
