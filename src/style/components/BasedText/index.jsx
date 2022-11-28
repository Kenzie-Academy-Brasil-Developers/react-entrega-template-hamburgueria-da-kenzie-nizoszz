import React from "react";

export const BasedText = ({ children, className, tag }) => {
  return (
    <>
      {tag === "headline" && <span className={className}>{children}</span>}
      {tag === "body" && <span className={className}>{children}</span>}
      {tag === "body-600" && <span className={className}>{children}</span>}
      {tag === "caption" && <span className={className}>{children}</span>}
    </>
  );
};
