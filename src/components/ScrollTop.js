import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/fontawesome-free-solid";
import {} from "@fortawesome/fontawesome-free-regular";
import "./scss/styles.scss";

const ScrollTop = () => {
  return (
    <div
      className="scroll-to-top rounded"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};
export default ScrollTop;
