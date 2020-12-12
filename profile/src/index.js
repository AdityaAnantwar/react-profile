import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import { Avatar, Button, Divider, Grid, IconButton, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './slider1'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#e8e5e5",
    paddingTop: "5em",
    
  },
  profilepic: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2vw",
    marginBottom: "2vw",
  },
  share: {
    textAlign: "center",
  },
  stat: {
    textAlign: "center",
  },
  root: {
    overflowX: "hidden",
  },
  footer: {
    backgroundColor: "#acabab",
    padding: "2em",
    textAlign: "center",
  },
  footeritem: {
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  try: {
    marginTop: "auto",
    marginBottom: "auto",
  }
}));

function Logo(){
    return (
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography className="logo" variant="h2">Genio</Typography>
        </Grid>
        <Grid item xs={6} >
          <img className="gplay" src='./google_play_logo.png' alt='Google Play' />
        </Grid>
      </Grid>
    );
}

function Details(){
  const classes = useStyles();
  return(
    <Grid container spacing={1}>
      <Grid item sm={6} xs={12}>
      
        <Avatar className={classes.profilepic} src="./me.jpg" alt="me" />
      
      </Grid>
      <Grid item  sm={6} xs={12} className={classes.try}>
        <Grid  container spacing={1} alignItems="center" direction="column" justify="center">
        
          <Grid item xs={12}>
            <Typography variant="h4">Aditya Anantwar</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary">Follow</Button>
          </Grid>
        
        </Grid>
      </Grid>
      <Container className={classes.share}>
        <Typography><Link href="#" variant="h6">Share your Profile</Link></Typography>
      </Container>
    </Grid>
  )
}

function Stats(){
  const classes= useStyles();

  return(
    <Grid container spacing={1} >
      <Grid item xs={4} className={classes.stat}>
        <Typography variant="h6">500</Typography>
        <Typography variant="body1">Likes</Typography>
      </Grid>
      <Grid item xs={4} className={classes.stat}>
        <Typography variant="h6">500</Typography>
        <Typography variant="body1">Followers</Typography>
      </Grid>
      <Grid item xs={4} className={classes.stat}>
        <Typography variant="h6">500</Typography>
        <Typography variant="body1">Following</Typography>
      </Grid>
      <Grid item xs={6} className={classes.stat}>
        <Typography variant="h6">500</Typography>
        <Typography variant="body1">Certificates</Typography>
      </Grid>
      <Grid item xs={6} className={classes.stat}>
        <Typography variant="h6">500</Typography>
        <Typography variant="body1">Assignments</Typography>
      </Grid>
    </Grid>
  )
}

function About(){
  return(
  <Container>
    <Typography variant="h4">About</Typography>
    <br />
    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium scelerisque odio ut sodales. Nam a risus porttitor, volutpat metus ac, cursus nibh. Ut in dolor pretium, condimentum velit sit amet, elementum nisi. In dignissim quam nec urna placerat, at aliquet metus condimentum. Praesent eu nunc sit amet ante suscipit tincidunt ac eget purus. Integer lacinia in felis eu scelerisque. Suspendisse blandit velit velit, at tincidunt nibh finibus nec.</Typography>
  </Container>
  )
}

function Certificates(){
  return(
    <Container>
      <Typography variant="h4">Certificates</Typography>
      <Slider/>
    </Container>
  )
}

function Assignments(){
  return(
    <Container>
      <Typography variant="h4">Assignments</Typography>
      <Slider />
    </Container>
  )
}

function Footer(){
  const classes=useStyles();
  return(
    
    <Grid container spacing={0} className={classes.footer}>
      <Grid item xs={4} sm={3}>
        <Button href="#" size="small">Blog</Button>
      </Grid>
      <Grid item xs={4} sm={3}>
        <Button href="#" size="small">Privacy Policy</Button>
      </Grid>
      <Grid item xs={4} sm={3}>
        <Button href="#" size="small">Terms and Conditions</Button>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button href="#" size="small">Sitemap</Button>
      </Grid>
      
      <Grid item xs={12} className={classes.footeritem}>
        <Typography variant="h4">Genio</Typography>
      </Grid>
      <Grid item xs={12} className={classes.footeritem}>
        <Divider variant="middle" color="black" />
      </Grid>
      <Grid item xs={4} className={classes.footeritem}>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4} className={classes.footeritem}>
        <IconButton color="primary">
        <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4} className={classes.footeritem}>
        <IconButton color="primary">
        <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} className={classes.footeritem}>
        <Divider variant="middle" color="black" />
      </Grid>
      <Grid item xs={12}>
        <img src="./google_play_logo.png" className="footerimg" alt ="ggogle play" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Grid>
    </Grid>
  )
}

function Final(){
  const classes = useStyles();
  
  return(
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Container>
        <Paper className={classes.paper}>
          <Details />
          <Paper elevation={3} className="paperstat">
            <Stats />
          </Paper>
          <Paper elevation={3} className="about">
            <About />
          </Paper>
          <Paper className="slider">
            <Certificates />
          </Paper>
          <Paper className="slider">
            <Assignments />
          </Paper>
          <Footer />
        </Paper>
        
      </Container>
    </Grid>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Final />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
