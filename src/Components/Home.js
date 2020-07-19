import React from 'react';
import Background from "./nike-bg.jpg";
import './Home.css';
import shoe from './shoe.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
  }));
var sectionStyle = {
	width: "100%",
	height: "100vh",
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundImage: `url(${Background})`
  };

function Home() {

	const classes = useStyles();
  return (
	<div>
		<section style={ sectionStyle } className="Home-body">
			<div className="title">
			 This is Home page <br/>
			 <Button className="Button" variant="contained" color="primary">
        SHOP NOW
      </Button><br />
			 </div>
			 <img src={shoe} className="image-1"></img>
		</section>
	</div>
  );
}

export default Home;