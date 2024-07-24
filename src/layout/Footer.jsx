import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#C17C74", color: "#2A3D45" }}>
      <Container maxWidth="lg">
        <Typography component="p" variant="p" p={3} fontWeight={700}>
          پروژه وبلاگ با &nbsp;&nbsp;graph Ql&nbsp;&nbsp; و &nbsp;&nbsp;Material
          UI
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
