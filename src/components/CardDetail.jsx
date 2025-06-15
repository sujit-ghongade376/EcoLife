import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Toolbar from "@mui/material/Toolbar";
import { cardData } from "./Cards";

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cardData.find((c) => c.id === id);

  if (!card) {
    return (
      <Box sx={{ mt: 12, textAlign: "center" }}>
        <Typography variant="h4">Card Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "#fafafa",
        mt: 5,
        mb: 5,
      }}
    >
      <Toolbar /> {/* Push content below AppBar */}
      <IconButton
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          left: 80,
          top: 100,
          bgcolor: "#fff",
          boxShadow: 1,
        }}
        aria-label="back"
      >
        <ArrowBackIcon />
      </IconButton>
      <Box sx={{ pt: 6, textAlign: "center", mb: 20 }}>
        <img
          src={card.url}
          alt={card.description}
          style={{ maxWidth: "100%", height: 400 }}
        />
        <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
          {card.description}
        </Typography>
      </Box>
    </Box>
  );
}
