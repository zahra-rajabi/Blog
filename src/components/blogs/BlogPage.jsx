import { useQuery } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../GraphQl/queries";
import Loader from "../Shared/Loader";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(getPost, {
    variables: {
      slug,
    },
  });
  const navigate = useNavigate();

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

          <ArrowBackIcon
            onClick={() => {
              navigate(-1);
            }}
            style={{
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item xs={12} mt={6} textAlign="center">
          <img
            src={post.coverPhoto.url}
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Grid>
        <Grid item xs={12} mt={6} display="flex" gap={2} alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            style={{ width: "60px", height: "60px" }}
          />
          <Box component="div">
            <Typography component="p" variant="h6" fontWeight={700} mt={1}>
              {post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              fontWeight={700}
              mt={0.5}
              color="text.secondary"
            >
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item mt={9} xs={12}>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
