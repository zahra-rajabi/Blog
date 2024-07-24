import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../GraphQl/queries";
import Loader from "../Shared/Loader";
import { Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(getPost, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong...</p>;
  const { post } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h5"
            color="primary"
            fontWeight={700}
          >
            {post.title}
          </Typography>
          <Link to="/blogs" style={{ color: "#2A3D45" }}>
            <ArrowBackIcon />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
