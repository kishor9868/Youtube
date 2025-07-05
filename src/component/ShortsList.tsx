import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useAppSelector } from '../hook';

const ShortsList: React.FC = () => {
    const shorts = useAppSelector(state => state.search.item.shorts);

    if (!shorts?.length) {
        return <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
                Short video not found
            </Typography>
        </Box>
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Shorts</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                {shorts.map((short, index) => (
                    <Paper key={index} sx={{ minWidth: 150 }}>
                        <img src={short.snippet.thumbnails.medium.url} alt={short.title} width="100%" />
                        <Typography>{short.title}</Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default ShortsList;
