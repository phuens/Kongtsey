import React, { useState } from 'react';
import styles from './homepage.module.scss';
import { Grid } from '@material-ui/core';
import Navbar from '../../common/navbar/navbar';

import Button from '@material-ui/core/Button';
import Authentication from '../../features/authentication/authentication';

function Homepage() {
    const [auth, setAuth] = useState(false);
    const [authShow, setAuthShow] = useState('');

    function toggleAuth(value) {
        return () => {
            if (value != 'off') {
                setAuth(true);
                setAuthShow(value);
            } else {
                setAuth(false);
                setAuthShow('');
            }
        };
    }

    return (
        <div className={styles.root}>
            <Grid container>
                <Grid item xs={1} className={styles.navbar}>
                    <Navbar toggleAuth={toggleAuth} />
                </Grid>
                {auth ? (
                    <Grid item xs={4} className={styles.homepage_info}>
                        <Authentication toggleAuth={toggleAuth} type={authShow} />
                    </Grid>
                ) : (
                    'auth is off'
                )}
            </Grid>
        </div>
    );
}

export default Homepage;
