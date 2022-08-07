import React from "react";

const Lines = () => {
  const styles = {
    line: {
      width: "100%",
      height: "1px",
      background: "#3C3C3C",
      marginTop: "24px",
      marginBottom: "24px",
    },
  };
  return <hr style={styles.line} />;
};

export default Lines;
