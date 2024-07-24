import { Container, Grid, Typography } from "@mui/material";
import Authors from "../Authors/Authors";
import Blogs from "../blogs/Blogs";
function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} p={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={800}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={800}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
