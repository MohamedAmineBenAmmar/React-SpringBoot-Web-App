import React, { useEffect, useRef } from "react";
import { Messages } from "primereact/messages";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ severity, detail }) => {
  const msgs1 = useRef(null);

  useEffect(() => {
    msgs1.current.show([
      {
        severity: severity,
        // summary: "Success",
        detail: detail,
        sticky: true,
      }
    ]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Messages ref={msgs1} />
    </div>
  );
};
