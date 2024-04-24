import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import DefaultSlider from './DefaultSilder';
import { tokens } from '../../../../Context/ThemeContext'
import { Typography, useTheme } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// import Divider from '@mui/material/Divider';
export default function Slider({card}) {
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
const toggleDrawer = (anchor, open) => (event) => {
    if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
    ) {
    return;
    }
    setState({ ...state, [anchor]: open });
};
// text inside drawer
    const list = (anchor) => (
        <Box
        sx={{
            background:colors.primary[900],
            width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1100 }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
        {/* <Divider /> */}
        {/* <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700'}}> {card.title}  </Typography> */}
            <Typography color={colors.primary[100]}
            sx={{textAlign:'center',fontWeight:'700'}}>
                {card.title}         
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
        <DefaultSlider card={card}/>
        </Box>
    );
return (
    <div>
    {
    ['right'].map((anchor) => ( //'left', 
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} variant='outlined'  endIcon={
            <ChevronRightOutlinedIcon id='icon1' 
            sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>} 
                sx={{ my: 2, 
                    position :"relative", 
                    background: `#9ea3dc`,
                    mt:'25px',
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    display: 'flex',textTransform: 'capitalize',width:150,
                    transition:'1700ms',
                    color:'white',
                    fontWeight:600,
                        '&:hover ': {
                        backgroundColor:'silver !important' ,
                        // mb:1,
                    },
                        '&:hover #icon1': {
                            marginLeft:'5px'
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: 'black',
                    }}}
                    type="submit" value="Send">Learn More</Button>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}>
                {list(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    ))
    }
    </div>
);
}