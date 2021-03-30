import React from 'react';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../../asset/logo.png';
// import styles from './navbar.module.scss';

function Navbar(props) {
    // const [open, setOpen] = React.useState(true);
    // const [openExp, setOpenExp] = React.useState(true);

    return (
        <Grid container spacing={0} className={'parent-container'}>
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <List>
                    <ListItem button key={'logo'}>
                        <img src={Logo} alt="company logo" style={{ width: '106%' }} />
                    </ListItem>

                    <ListItem button key={'donate'}>
                        <ListItemText primary={'donate'} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Navbar;
