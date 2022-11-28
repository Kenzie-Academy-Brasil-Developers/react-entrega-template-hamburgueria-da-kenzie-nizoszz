import React from "react";

export const BasedTitle = ({ children, className, tag }) => {
  return (
    <>
      {tag === "heading1" && <h1 className={className}>{children}</h1>}
      {tag === "heading2" && <h2 className={className}>{children}</h2>}
      {tag === "heading3" && <h3 className={className}>{children}</h3>}
      {tag === "heading4" && <h4 className={className}>{children}</h4>}
    </>
  );
};
