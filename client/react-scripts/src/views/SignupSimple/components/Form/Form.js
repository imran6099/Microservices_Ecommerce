import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { authFirbase } from 'Firbase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { Section } from 'components/organisms';
import {} from 'redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import Validations from './Validations';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const Form = () => {
  const classes = useStyles();
  let history = useHistory();
  let dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);


  const registerCompleteHandle = () => {

  }

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('emailForRegistration'),
      firstName: 'Imran',
      lastName: 'Abdullah',
      password: '12345678',
      verifyPassword: '12345678',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setLoading(true);
      await registerCompleteHandle(values);
    },
  });

  return (
    <div className={classes.root}>
      <form
        name="password-reset-form"
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              variant="outlined"
              fullWidth
              id="firstName"
              autoFocus
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
                autoComplete="lname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              type = 'email'
              fullWidth
              size="medium"
              name="email"
                autoComplete="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              type = 'password'
              name="password"
              fullWidth
              value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="verifyPassword"
                label="Verify Password"
                type="password"
                id="verifyPassword"
                autoComplete="verify-password"
                value={formik.values.verifyPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.verifyPassword &&
                  Boolean(formik.errors.verifyPassword)
                }
                helperText={
                  formik.touched.verifyPassword && formik.errors.verifyPassword
                }
              />
            </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
