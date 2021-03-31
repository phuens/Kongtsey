import React from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Logo from '../../asset/logo.png';
import EmailIcon from '@material-ui/icons/Email';
import styles from './navbar.module.scss';

function Navbar(props) {
    // const [open, setOpen] = React.useState(true);
    // const [openExp, setOpenExp] = React.useState(true);

    return (
        // TODO: need to center the text and add icons as well.
        <Grid container spacing={0} className={'parent-container'}>
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <List>
                    {/* company logo */}
                    <ListItem button key={'logo'} className={styles.listItem}>
                        <img src={Logo} alt="company logo" style={{ width: '106%' }} />
                    </ListItem>
                    <ListItem button key={'contact'} className={styles.listItem}>
                        <ListItemText primary={'Contact'} style={{ textAlign: 'center' }} />
                    </ListItem>
                    <ListItem button key={'about'} className={styles.listItem}>
                        <ListItemText primary={'About'} style={{ textAlign: 'center' }} />
                    </ListItem>
                    <ListItem button key={'donate'} className={styles.listItem}>
                        <ListItemText primary={'Donate'} style={{ textAlign: 'center' }} />
                    </ListItem>
                    <ListItem button key={'login'} className={styles.listItem}>
                        <ListItemText primary={'Login'} style={{ textAlign: 'center' }} />
                    </ListItem>
                    <ListItem button key={'sign-up'} className={styles.listItem}>
                        <ListItemText primary={'Sign Up'} style={{ textAlign: 'center' }} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Navbar;
