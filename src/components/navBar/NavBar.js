import { Link } from 'react-router-dom';
import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Toolbar,IconButton,Typography,Menu,Button,Container,MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext,tokens} from '../../Context/ThemeContext'
import  GlobalContext  from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const pages = [  'Home', 'Pricing','Product', 'About', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function DrawerAppBar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};
const handleCloseNavMenu = () => {
        setAnchorElNav(null);
};
const handleCloseUserMenu = () => {
        setAnchorElUser(null);
};

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { basket } = useContext(GlobalContext)
    console.log('basket',basket)
    const { toggleColorMode , mode } = useContext(ColorModeContext)
return (
    <AppBar position="static"  sx={{background: colors.primary[100] , width : '100%',
    position: 'fixed',
    top: 0, //'#638889' 
    zIndex:10
    }}>
    <Container sx={{}}>
        <Toolbar disableGutters>
        <AdbIcon sx={{ color:'#3399ff' ,display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ 
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: '#3399ff',
            textDecoration: 'none',
            }}
        >
            A&M-Care
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ 
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{textTransform: 'capitalize',}} textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <AdbIcon sx={{color:'#3399ff', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
            color:'#3399ff',
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: 'inherit',
            textDecoration: 'none',
            }}
        >
            A&M-Care
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                page=== 'Home'?
                <Link to={'/'}>
                    <Button  
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ 
                        my: 2,color:colors.primary[200], 
                        display: 'block',textTransform: 'capitalize',
                        transition:'170ms',
                        // fontWeight:600,///%
                        '&:hover': {
                        backgroundColor:'#e5eaf299',
                        mb:1,
                        fontWeight:600
                        // color:'#6b7a90'
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: 'black',
                    } }}
                    >
                        {page}
                    </Button>
                </Link>
                :
                <Link to={`${page}`}>
                    <Button 
                    key={page} 
                        sx={{  
                            my: 2, color:colors.primary[200], display: 'block',
                            textTransform: 'capitalize',
                        transition:'170ms',
                        
                        // fontWeight:600,
                        '&:hover': {
                        backgroundColor:'#e5eaf299',
                        mb:1,
                        fontWeight:600,
                        // color:'#6b7a90'
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: 'black',
                    }
                    }}>
                            {page}
                    </Button>
                </Link>
            ))}
        </Box>
        {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box> */}
        {/* <Button variant='contained'
        sx={{
            textTransform: 'capitalize',
        }}>
            Get Started
        </Button> */}
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            width: '30px',
            height: '30px', 
            border:'1px solid e5eaf299',
            borderRadius: '5px',
            marginLeft: '3px',
            marginRight: '3px',
            cursor:'pointer',
            boxShadow: '0px 0px 4px 1px silver',
            transition:'170ms',
            '&:hover': {
                backgroundColor:'#e5eaf299',
                mb:1,
            }}}
            onClick={()=>{toggleColorMode()}} >   
            { mode === "dark" ? 
            <NightsStayOutlinedIcon 
                    sx={{fontSize:'20px',color:colors.primary[300]}}
                />
                :
                <WbSunnyOutlinedIcon 
                sx={{fontSize:'20px', color:colors.primary[300]}} 
            />
                }
                
        </Box>
        <Link to={'/Cart'}>
            <Box  sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                width: '30px',
                height: '30px', 
                border:'1px solid e5eaf299',
                borderRadius: '5px',
                marginLeft: '3px',
                marginRight: '3px',
                cursor:'pointer',
                boxShadow: '0px 0px 4px 1px silver',
                transition:'170ms',
                position:'relative',
                '&:hover': {
                    backgroundColor:'#e5eaf299',
                    mb:1,
                }}}>
                <ShoppingBagOutlinedIcon 
                    sx={{fontSize:'20px',
                    color:'#3399ff'}}/>
                <Typography variant='span' 
                    display={basket.length ===  0? 'none':'inline-block'}
                    sx={{position:'absolute',
                    color:colors.primary[300],
                    backgroundColor: colors.primary[600],
                    borderRadius:16,
                    bottom:16,
                    right:1,
                    fontSize: '10px',
                    fontWeight:500
                    }}>{basket.length}</Typography>
            </Box>
        </Link>
        <Link to={'/Form'}>
            <Box  sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                width: 170,
                height: '30px', 
                border:'1px solid e5eaf299',
                borderRadius: '5px',
                marginLeft: '3px',
                marginRight: '3px',
                cursor:'pointer',
                boxShadow: '0px 0px 4px 1px silver',
                transition:'170ms',
                position:'relative',
                '&:hover': {
                    backgroundColor:'#e5eaf299',
                    mb:1,
                }}}>
                      <Button variant=""  
                    endIcon={
                        <ChevronRightOutlinedIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                } 
                    sx={{
                        color:colors.primary[300],
                        textTransform:'capitalizees',
                            '&:hover ': {
                                // backgroundColor:'white !important' ,
                                // mb:1,
                            },
                                '&:hover #icon1': {
                            marginLeft:'5px'
                                
                            },'&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            }
                    }}
                            type="submit" value="Send"> Get start
            </Button>
            </Box>
        </Link>
        {/* <LanguageButtons/> */}
        </Toolbar>
    </Container>
    </AppBar>
);
}
export default DrawerAppBar;