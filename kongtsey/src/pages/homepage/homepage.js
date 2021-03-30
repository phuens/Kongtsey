import React from 'react';
import styles from './homepage.module.scss';
import { Grid } from '@material-ui/core';
import Navbar from '../../common/navbar/navbar';

function Homepage(props) {
    return (
        <div className={styles.root}>
            <Grid container>
                <Grid item xs={1} className={styles.navbar}>
                    <Navbar />
                </Grid>
                <Grid item xs={11} className={styles.homepage_info}>
                    <h1>this is a place holder fpr the actual homepage </h1>
                </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;
