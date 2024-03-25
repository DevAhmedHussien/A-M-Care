import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
export default function Slider() {
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });
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
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1100 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        {/* <Divider /> */}
        hahahah
        </Box>
    );
return (
    <div>
    {['right'].map((anchor) => ( //'left', 
        <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)} sx={{background:'red'}}>Learn More</Button>
        <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
        >
            {list(anchor)}
        </SwipeableDrawer>
        </React.Fragment>
    ))}
    </div>
);
}