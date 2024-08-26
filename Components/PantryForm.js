import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { addPantryItem } from '../firebase';

export default function PantryForm({ onAdd }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && quantity) {
            const item = { name, quantity };
            const docRef = await addPantryItem(item);
            onAdd({ id: docRef.id, ...item });
            setName('');
            setQuantity('');
        }
    };

    return (
        <Box sx={{ marginTop: 4 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginRight: 2 }}
                    required
                />
                <TextField
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" sx={{ marginLeft: 2, backgroundColor: '#00c896' }}>
                    Add Item
                </Button>
            </form>
        </Box>
    );
}
