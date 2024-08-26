import React from 'react';
import { Box } from '@mui/material';

export default function VideoPlayer() {
    return (
        <Box sx={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
            <iframe 
                width="800" 
                height="450" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </Box>
    );
}
