import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  return (
    <Grid
      item
      xs={12}
      style={{ boxShadow: "rgba(0,0,0 , 0.1) 0 4px 10px", borderRadius: 4 }}
      sx={{ py: 1, my: 5 }}
    >
      <Grid item m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label=" ایمیل"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="نظر"
          variant="outlined"
          fullWidth
          multiline
          value={content}
          minRows={4}
          onChange={(e) => setContent(e.target.value)}
        />
      </Grid>
      <Grid item m={2}>
        <Button variant="contained">ارسال</Button>
      </Grid>
    </Grid>
  );
}

export default CommentForm;
