import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './authentication.module.scss';

export default function Authentication({ toggleAuth, type }) {
    if (type == 'login') {
        return (
            <form className={styles.auth_parent} noValidate autoComplete="off">
                <div className={styles.auth_child}>
                    <TextField id="standard-basic" label="Email" />
                </div>
                <div className={styles.auth_child}>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <Button variant="outlined" color="primary" onClick={toggleAuth('off')}>
                    close
                </Button>
            </form>
        );
    } else if (type == 'sign_up') {
        return (
            <form className={styles.auth_parent} noValidate autoComplete="off">
                <div className={styles.auth_child}>
                    <TextField id="standard-basic" label="Name" />
                </div>
                <div className={styles.auth_child}>
                    <TextField id="standard-basic" label="College" />
                </div>
                <div className={styles.auth_child}>
                    <TextField id="standard-basic" label="Email" />
                </div>
                <div className={styles.auth_child}>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <Button variant="outlined" color="primary" onClick={toggleAuth('off')}>
                    close
                </Button>
            </form>
        );
    }
    return;
}
