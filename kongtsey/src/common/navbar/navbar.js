import React from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo.png';

import styles from './navbar.module.scss';

function Navbar(props) {
    return (
        // TODO: need to center the text and add icons as well.
        <Grid container spacing={0} className={'parent-container'}>
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <List>
                    {/* company logo */}
                    <ListItem
                        button
                        key={'logo'}
                        className={styles.listItem}
                        component={Link}
                        to="/"
                    >
                        <img src={Logo} alt="company logo" style={{ width: '106%' }} />
                    </ListItem>

                    <ListItem
                        button
                        key={'contact'}
                        className={styles.listItem}
                        component={Link}
                        to="/donate"
                    >
                        <ListItemText primary={'Contact'} style={{ textAlign: 'center' }} />
                    </ListItem>

                    <ListItem
                        button
                        key={'about'}
                        className={styles.listItem}
                        component={Link}
                        to="/donate"
                    >
                        <ListItemText primary={'About'} style={{ textAlign: 'center' }} />
                    </ListItem>

                    <ListItem
                        button
                        key={'donate'}
                        className={styles.listItem}
                        component={Link}
                        to="/donate"
                    >
                        <ListItemText primary={'Donate'} style={{ textAlign: 'center' }} />
                    </ListItem>

                    <ListItem button key={'login'} className={styles.listItem}>
                        <ListItemText
                            primary={'Login'}
                            style={{ textAlign: 'center' }}
                            onClick={props.toggleAuth('login')}
                        />
                    </ListItem>

                    <ListItem button key={'sign-up'} className={styles.listItem}>
                        <ListItemText
                            primary={'Sign Up'}
                            style={{ textAlign: 'center' }}
                            onClick={props.toggleAuth('sign_up')}
                        />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Navbar;
