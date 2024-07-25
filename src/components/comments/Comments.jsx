import { useQuery } from "@apollo/client";
import React from "react";
import { getComments } from "../../GraphQl/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(getComments, {
    variables: {
      slug,
    },
  });
  if (error) return <p>something went wrong...</p>;
  if (loading) return;
  const { post } = data;
  const { comment } = post;
  console.log(comment);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0 , 0 , 0 , 0.1 ) 0 4px 10px ",
        borderRadius: 4,
        my: 8,
        p: 2,
      }}
    >
      <Grid item xs={12} mb={2}>
        <Typography component="p" variant="h6" fontWeight={700}>
          کامنت ها
        </Typography>
        {comment.length > 0 ? (
          <React.Fragment>
            {comment.map((item) => (
              <Grid
                item
                xs={12}
                p={2}
                mt={2}
                key={item.id}
                sx={{ border: "1px solid silver", borderRadius: 4 }}
              >
                <Box component="div" display="flex" alignItems="center" mb={3}>
                  <Avatar>{item.name[0]}</Avatar>
                  <Typography
                    component="span"
                    variant="p"
                    fontWeight={700}
                    marginRight={1}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <Typography component="p" variant="p">
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </React.Fragment>
        ) : (
          <Typography component="p" variant="p" mt={4}>
            کامنتی وجود ندارد
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default Comments;
