import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px",
        borderRadius: 4,
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="p" color="text.primary">
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="130"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h4"
          variant="div"
          fontWeight={600}
          color="text.primary"
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{ fontFamily: "YekanBakh", borderRadius: 2 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEl;
