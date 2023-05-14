import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import UserContext from '../Context/GlobalContext';
import Cookies from 'js-cookie';
import Axios from '../../share/AxiosInstance';

const Navbar = ({ handleOpen = () => {}, user, setUser = () => {} }) => {
  useEffect(() => {
    const userToken=Cookies.get('UserToken');
    if(userToken==null||userToken=='undefined') return;
    
  }, []);

  const logout = () => {
    setUser();
    Cookies.remove('UserToken');
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: 'sticky',
        zIndex: 10,
        marginBottom: '8px',
        padding: '16px',
      }}
    >
      {user ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography>{user.username}</Typography>
          <CustomButton text="Log out" handle={logout} />
        </Box>
      ) : (
        <CustomButton text="Log in" handle={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;
