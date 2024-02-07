
        import { Link } from 'react-router-dom';

     
    import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import Menu from '@mui/material/Menu';
    import MenuIcon from '@mui/icons-material/Menu';
    import Container from '@mui/material/Container';
    import Avatar from '@mui/material/Avatar';
    import Button from '@mui/material/Button';
    import Tooltip from '@mui/material/Tooltip';
    import MenuItem from '@mui/material/MenuItem';
    import AdbIcon from '@mui/icons-material/Adb';
    import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
    import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

    const pages = [  'Home', 'Pricing','Product', 'About', 'Contact'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

    return (
        <AppBar position="static" sx={{background:'white',color:'black' //'#638889'
        }}>
        <Container maxWidth="xl">
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
                            sx={{ my: 2, color: 'black', display: 'block',textTransform: 'capitalize',
                            fontWeight:600,
                            '&:hover': {
                            backgroundColor:'#e5eaf299',
                            mb:1,
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
                            sx={{  my: 2, color: 'black', display: 'block',textTransform: 'capitalize',
                            transition:'170ms',
                            fontWeight:600,
                            '&:hover': {
                            backgroundColor:'#e5eaf299',
                            mb:1,
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
                border:'1px solid white',
                borderRadius: '5px',
                marginLeft: '10px',
                marginRight: '10px',
                cursor:'pointer',
                boxShadow: '1px 0px 9px 2px silver'}}>   
                    <NightlightOutlinedIcon sx={{fontSize:'20px',color:'#3399ff'}}/>
            </Box>
            {/* <Box  sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                width: '30px',
                height: '30px', 
                border:'1px solid white',
                borderRadius: '5px',
                marginLeft: '10px',
                marginRight: '10px',
                cursor:'pointer',
                boxShadow: '1px 0px 9px 2px silver'}}>
                <ShoppingBagOutlinedIcon sx={{fontSize:'20px',color:'#3399ff'}}/>
            </Box> */}
            </Toolbar>
        </Container>
        </AppBar>
    );
    }
    export default DrawerAppBar;