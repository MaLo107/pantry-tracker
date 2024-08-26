import React, { useState, useEffect } from 'react';
import { Box, IconButton, List, ListItem, ListItemText, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getPantryItems, deletePantryItem, updatePantryItem } from '../firebase';

export default function PantryList({ onEdit }) {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const pantryItems = await getPantryItems();
            setItems(pantryItems);
        };
        fetchItems();
    }, []);

    const handleDelete = async (id) => {
        await deletePantryItem(id);
        setItems(items.filter((item) => item.id !== id));
    };

    const handleEdit = async (id) => {
        const newName = prompt('Enter new name');
        const newQuantity = prompt('Enter new quantity');
        if (newName && newQuantity) {
            const updatedItem = { name: newName, quantity: newQuantity };
            await updatePantryItem(id, updatedItem);
            setItems(items.map((item) => (item.id === id ? { id, ...updatedItem } : item)));
        }
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ marginTop: 4 }}>
            <TextField
                label="Search Items"
                variant="outlined"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ marginBottom: 3 }}
            />
            <List>
                {filteredItems.map((item) => (
                    <ListItem key={item.id} sx={{ backgroundColor: '#1c2a48', marginBottom: 2, borderRadius: 2 }}>
                        <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item.id)}>
                            <EditIcon sx={{ color: '#00c896' }} />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                            <DeleteIcon sx={{ color: '#f44336' }} />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
