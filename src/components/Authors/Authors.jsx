import { useQuery } from "@apollo/client";
import { getAuthors } from "../../GraphQl/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";
function Authors() {
  const { loading, data, error } = useQuery(getAuthors);

  if (loading) return <Loader />;
  if (error) return <p>something went wrong...</p>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px",
        borderRadius: 4,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "end",
                gap: "1rem",
              }}
            >
              <Avatar src={author.avatar.url} />
              <Typography component="p" variant="p" color="secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
