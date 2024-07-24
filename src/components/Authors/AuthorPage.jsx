import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { getAuthorData } from "../../GraphQl/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../Shared/CardEl";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(getAuthorData, {
    variables: { slug: slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>something went wrong...</p>;

  const { avatar, description, field, name, post } = data.author;

  return (
    <Container maxWidth="lg">
      <Grid container mt={8}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Avatar src={avatar.url} sx={{ height: 250, width: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" mt={1} color="text.secondary">
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700} mb={2}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mb={4}>
            {post.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CardEl
                  title={item.title}
                  slug={item.slug}
                  coverPhoto={item.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
