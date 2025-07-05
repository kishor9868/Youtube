import React, { useRef } from 'react';
import { AppBar, Toolbar, InputBase, Box, Typography } from '@mui/material';
import { useAppDispatch } from '../hook';
import { searchHandler } from '../redux/action/searchAction';

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (!value.trim()) return;

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)   //clear the last timer
        }

        debounceTimeout.current = setTimeout(() => {
            dispatch(searchHandler(value))
        }, 500);

    }
    return <AppBar position="sticky" sx={{ zIndex: 1201 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap sx={{ color: 'white' }}>
                YouTube
            </Typography>
            <Box sx={{ backgroundColor: 'white', padding: '0 10px', borderRadius: 1, width: '50%' }}>
                <InputBase placeholder="Search..." fullWidth onChange={handleChange} />
            </Box>
        </Toolbar>
    </AppBar>
}
export default Navbar;