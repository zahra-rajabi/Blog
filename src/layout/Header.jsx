import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky" style={{ color: "#C17C74" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="700"
            style={{ width: "100%" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              وبلاگ
            </Link>
          </Typography>

          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
