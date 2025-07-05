import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
const Sidebar: React.FC = () => {
    const menuItems: string[] = ['Home', 'Trending', 'Subscriptions', 'Library'];
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 200,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
export default Sidebar;