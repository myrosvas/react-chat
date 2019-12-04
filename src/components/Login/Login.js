import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


import './Login.scss';

const CN = 'login-window';

const Login = () => {
    const chatTitle = 'Log in';

    return (
      <div className={CN}>
        <div className={`${CN}__title-wrapper`}>
            <span>{chatTitle}</span>
        </div>
        <div className={`${CN}__dialogue-wrapper`}>
          <TextField
          className={`${CN}__text-input`}
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" className={`${CN}__enter-btn btn`}>Enter messenger</Button>
        </div>
      </div>
    );
}

export default Login;