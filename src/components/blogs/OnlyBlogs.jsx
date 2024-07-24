import { useQuery } from "@apollo/client";
import { getBlogsInfo } from "../../GraphQl/queries";
import Loader from "../Shared/Loader";
import CardEl from "../Shared/CardEl";
import { Container, Grid } from "@mui/material";

function OnlyBlogs() {
  const { loading, data, error } = useQuery(getBlogsInfo);
  if (loading) return <Loader />;
  if (error) return <p>something went wrong...</p>;
  const { posts } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={9} mb={6} spacing={4}>
        {posts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <CardEl {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OnlyBlogs;
