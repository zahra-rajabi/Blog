import { useQuery } from "@apollo/client";
import { getBlogsInfo } from "../../GraphQl/queries";
import { Grid } from "@mui/material";
import CardEl from "../Shared/CardEl";
import Loader from "../Shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(getBlogsInfo);

  if (loading) return <Loader />;
  if (error) return <h2>something went wrong...</h2>;
  return (
    <Grid container spacing={4}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
