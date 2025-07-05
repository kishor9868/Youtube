import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useAppSelector } from '../hook';
const VideoList: React.FC = () => {
    const videos = useAppSelector(state => state.search.item.normal);

    if (!videos?.length) {
        return <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
                Video not found
            </Typography>
        </Box>
    }

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h6">Videos</Typography>
            <Grid container spacing={2} >
                {videos.map((video) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={video.id.videoId}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                            />
                            <CardContent>
                                <Typography variant="body2">{video.snippet.title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default VideoList;