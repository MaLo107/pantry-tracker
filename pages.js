import Head from 'next/head';
import Header from '../components/Header';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';
import VideoPlayer from '../components/VideoPlayer';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import '../styles/global.css';

function Home() {
    const [items, setItems] = useState([]);

    const handleAdd = (item) => {
        setItems([...items, item]);
    };

    return (
        <>
            <Head>
                <title>Pantry Tracker</title>
                <meta name="description" content="Pantry management app with Next.js, Material UI, Firebase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth="lg">
                <Box sx={{ paddingTop: 4 }}>
                    <VideoPlayer />
                    <PantryForm onAdd={handleAdd} />
                    <PantryList items={items} />
                </Box>
            </Container>
        </>
    );
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;