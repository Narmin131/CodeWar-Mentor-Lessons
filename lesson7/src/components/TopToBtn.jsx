import React, { useEffect, useState } from "react";

const TopToBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const clickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={clickToTop}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: visible ? "block" : "none",
        }}
      >
        yuxari
      </button>
    </>
  );
};

export default TopToBtn;
