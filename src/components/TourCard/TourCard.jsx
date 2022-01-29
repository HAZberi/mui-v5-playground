import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";

import { cardImage } from "./TourCardStyles";

const TourCard = () => {
  return (
    <Grid item sm={6} lg={3} xs={12} xl={2}>
      <Paper elevation={2} square>
        <Box
          component="img"
          sx={cardImage}
          src="https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Niagra Falls"
        />
        <Grid container direction="column" ml={1} spacing={1}>
          <Grid item>
            <Typography variant="body1">
              Immerse yourself in the falls
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item sx={{ marginRight: "0.25rem" }}>
              <AccessTime sx={{ fontSize: "1.25rem" }} />
            </Grid>
            <Grid item>
              <Typography variant="body3" component="p">
                6 hours
              </Typography>
            </Grid>
          </Grid>
          <Grid item container mt={3} spacing={1}>
            <Grid item>
              <Rating value={4.5} precision={0.5} size="small" readOnly />
            </Grid>
            <Grid item sx={{marginLeft: '-0.25rem'}}>
              <Typography variant="body2">4.5</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">(650 reviews)</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6" component='b'>From $149 CAD</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TourCard;
