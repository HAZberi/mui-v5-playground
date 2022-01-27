import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";

import { cardImage } from "./TourCardStyles";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={2} square>
        <Box
          component="img"
          sx={cardImage}
          src="https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Niagra Falls"
        />
        Hello
      </Paper>
    </Grid>
  );
};

export default TourCard;
