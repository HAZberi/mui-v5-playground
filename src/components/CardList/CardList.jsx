import Grid from "@mui/material/Grid";

import TourCard from "../TourCard/TourCard";

const CardList = () => {
  return (
    <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
    </Grid>
  );
};

export default CardList;
