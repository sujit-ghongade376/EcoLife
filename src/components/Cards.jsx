import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const cardData = [
  {
    id: "img0",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Mountain lake with misty forest",
  },
  {
    id: "img1",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Sunrise over a snowy riverbank ",
  },
  {
    id: "img2",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Lush green mountain valley ",
  },
  {
    id: "img3",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Golden meadow with distant ",
  },
  {
    id: "img4",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Lush green mountain valley ",
  },
  {
    id: "img5",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Bright green hills under ",
  },
  {
    id: "img6",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Mountain lake with misty forest ",
  },
  {
    id: "img7",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Bright green hills under dramatic ",
  },
  {
    id: "img8",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Repeat of winter sunrise landscape",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  width: 350,
  transition:
    "transform 0.15s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1)",
  boxShadow: theme.shadows[3],
  "&:hover": {
    transform: "scale(1.08)",
    boxShadow: theme.shadows[10],
    zIndex: 10,
  },
}));

export default function Cards({ search }) {
  const navigate = useNavigate();
  // Filter cardData based on search input
  const filteredCards = cardData.filter((card) =>
    card.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 20, mb: 20 }}
      justifyContent="center" // center horizontally
      alignItems="flex-start" // align to top (change to "center" for vertical centering)
    >
      {filteredCards.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            No Result found for "{search}"
          </Typography>
        </Grid>
      ) : (
        filteredCards.map((card, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={card.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StyledCard
              onClick={() => navigate(`/card/${card.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.url}
                alt={card.description}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))
      )}
    </Grid>
  );
}
