import { Typography,Card,CardContent, CardActions,Button,Grid, DialogTitle,
    Dialog,handleClose,DialogContent,DialogContentText,DialogActions
} from '@material-ui/core'
import React,{useState,Fragment} from 'react'
import {getMatchDetail} from "../api/Api";

const MyCard = ({match}) => {

    const [detail,setDetail]=useState({});

    const [open,setOpen]=useState(false);

    const handleClick=(id)=>{
        getMatchDetail(id)
            .then((data)=> {console.log("MATCH DATA",data)
        setDetail(data);
        handleOpen();
        })
            .catch((error)=> console.log(error));
    };

    const getMatchCart=()=>{
        return(
            <Card style={{marginTop:10}}>
                <CardContent>
                
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item>
                        <Typography variant="h5">{match["team-2"]}</Typography>
                    </Grid>
                    <Grid item>
                    <Typography style={{fontWeight:'bold',color:'red',fontStyle:'italic'}} variant="h2">VS</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{match["team-1"]}</Typography>
                    </Grid>

                </Grid>
                    
                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                        <Button onClick={()=>{
                            handleClick(match.unique_id);
                        }} item variant="contained" color="primary">
                            Show Details
                        </Button>
                        <Button style={{marginLeft:5}} item variant="contained" color="primary" variant="outlined">
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        )};

        const handleClose=()=>{
            setOpen(false)
        }

        const handleOpen=()=>{
            setOpen(true)
        }

        const getDialog=()=>(
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>{detail.stat}</Typography>
                        <Typography>
                            Match <span>{detail.matchStarted ? "Started": "Still not started"}{" "}</span>
                        </Typography>
                        <Typography>
                            Score: <span>{detail.score ? "Score": "didn't find any match"}</span>
                        </Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
        return (
            <Fragment>
            {getMatchCart()}
            {getDialog()}
            </Fragment>
        )
    }
    

    


export default MyCard
