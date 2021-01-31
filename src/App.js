import {Grid,Typography} from "@material-ui/core"
import './App.css';
import React,{useEffect,useState,Fragment} from 'react'
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api';

function App() {

  const [matches,setMatches]=useState([]);

  useEffect(()=>{
    getMatches()
      .then((data)=>{
        setMatches(data.matches)
        console.log(data.matches);
      }
      
      )
      .catch((error)=>alert("could not load data"));
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3" style={{fontWeight:'bold'}}>Cricket Live Score App</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {matches.map((match)=>(
        <Fragment>
          {match.type==="Twenty20" ? (
            <MyCard key={match.unique_id} match={match} />
          ):(
            " "
          )}
        </Fragment>
      ))}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
