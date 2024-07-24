import { useQuery } from "@apollo/client";
import { getAuthors } from "../../GraphQl/queries";
import Loader from "../Shared/Loader";
import {
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function OnlyAuthors() {
  const { loading, data, error } = useQuery(getAuthors);

  if (loading) return <Loader />;
  if (error) return <p>Something went error...</p>;
  const { authors } = data;
  console.log(authors[0].post.length);
  return (
    <Container maxWidth="lg" style={{ height: "70vh" }}>
      <Grid container spacing="12" mt={9} mb={9}>
        {authors.map((author) => (
          <Grid key={author.id} item width="100%" xs={12} sm={6} md={3}>
            <Link
              to={`/authors/${author.slug}`}
              style={{ textDecoration: "none", color: "#2A3D45" }}
            >
              <Card key={author.id} style={{ textAlign: "center" }}>
                <CardActionArea>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={author.avatar.url}
                      style={{ width: "50%", height: "50%" }}
                    />
                  </div>
                  <Typography
                    component="h3"
                    variant="h5"
                    mt={2}
                    style={{ fontFamily: "YekanBakh" }}
                  >
                    {author.name}
                  </Typography>
                  <Typography style={{ fontFamily: "YekanBakh" }} mt={1}>
                    تعداد مقالات:
                    <span style={{ marginRight: 4 }}>{author.post.length}</span>
                  </Typography>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OnlyAuthors;
