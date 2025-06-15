import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer({ darkMode }) {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: darkMode ? "#222" : "#ffaa80",
        color: darkMode ? "#fff" : "#222",
        py: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
        textAlign: "center",
        zIndex: 1201,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Magneto. All rights reserved.
      </Typography>
    </Box>
  );
}
