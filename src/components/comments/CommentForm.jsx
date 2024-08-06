import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SendComment } from "../../GraphQl/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, error }] = useMutation(SendComment, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      toast.success("کامنت ارسال شد ", {
        position: "top-center",
        theme: "dark",
      });
      setName("");
      setEmail("");
      setText("");
    } else {
      toast.error("تمام فیلد هارو پر کنید", {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <Grid
      item
      xs={12}
      style={{ boxShadow: "rgba(0,0,0 , 0.1) 0 4px 10px", borderRadius: 4 }}
      sx={{ py: 1, my: 5 }}
    >
      <Grid item m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
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
          value={text}
          minRows={4}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item m={2}>
        {loading ? (
          <Button variant="contained" disabled onClick={sendHandler}>
            در حال ارسال...
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ fontFamily: "inherit" }}
            onClick={sendHandler}
          >
            ارسال
          </Button>
        )}
        <ToastContainer />
      </Grid>
    </Grid>
  );
}

export default CommentForm;
