import React, { useState } from 'react';
import { GrMenu, GrCart, GrSearch } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2d3436',
        },
    },
});

const Navbar = () => {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(true);

    const logout = () => {
        navigate('/');
    }
    const account = () => {
        navigate('/');
    }
    const tickets = () => {
        navigate('/');
    }
    const newTicket = () => {
        navigate('/');
    }
    const about = () => {
        navigate('/');
    }
    const contact = () => {
        navigate('/');
    }

    const login = () => {
        navigate('/');
    }

    const signup = () => {
        navigate('/');
    }

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant='h5' className='mt-3 mb-3 text-center'>Phoneque Official!</Typography>
            {isUser ? <List>
                <ListItemButton className='my-2' onClick={tickets}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <SmartphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary='ALL PHONES' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={tickets}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <PhoneAndroidIcon />
                    </ListItemIcon>
                    <ListItemText primary='ANDROIDS' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={tickets}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary='IPHONES' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={newTicket}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary='CART' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={tickets}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <LocalShippingIcon />
                    </ListItemIcon>
                    <ListItemText primary='ORDERS' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={about}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary='ABOUT US' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={contact}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='CONTACT US' sx={{ color: "black" }} />
                </ListItemButton>
            </List> : <List>
                <ListItemButton className='my-2' onClick={about}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary='ABOUT US' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={contact}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='CONTACT US' sx={{ color: "black" }} />
                </ListItemButton>
            </List>}
            <Divider />
            {isUser ? <List>
                <ListItemButton className='my-2' onClick={account}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary='ACCOUNT' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={logout}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary='LOGOUT' sx={{ color: "black" }} />
                </ListItemButton>
            </List> : <List>
                <ListItemButton className='my-2' onClick={login}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary='LOGIN' sx={{ color: "black" }} />
                </ListItemButton>
                <ListItemButton className='my-2' onClick={signup}>
                    <ListItemIcon sx={{ color: "black" }}>
                        <HowToRegIcon />
                    </ListItemIcon>
                    <ListItemText primary='SIGNUP' onClick={signup} sx={{ color: "black" }} />
                </ListItemButton>
            </List>}
        </Box>
    );

    return (
        <nav className='navbar py-5 px-5 md:px-10 shadow-sm flex justify-between items-center'>
            <Link to='/' className='uppercase text-xl md:text-2xl' style={{ fontFamily: "'Genos', sans-serif" }}>Phoneque</Link>
            <div className='hidden md:flex md:justify-between md:w-72'>
                <Link>All Phones</Link>
                <Link>Android</Link>
                <Link>iPhone</Link>
            </div>
            <div className='hamburger md:hidden'>
                <ThemeProvider theme={theme}>
                    <IconButton color="primary" component="label" onClick={toggleDrawer("right", true)}>
                        <GrMenu />
                    </IconButton>
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {list("right")}
                    </Drawer>
                </ThemeProvider>
            </div>
            <div className='hidden md:flex md:justify-between md:w-24 text-lg'>
                <GrSearch className='cursor-pointer' />
                <GrCart className='cursor-pointer' />
                <FaRegUser className='cursor-pointer' />
            </div>
        </nav>
    )
}

export default Navbar