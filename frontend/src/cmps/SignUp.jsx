import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { signUp } from '../store/actions/user-actions';
import { UserMsg } from './UserMsg';


class _SignUp extends React.Component {
    state = {
        email: '',
        fullName: '',
        password: '',
        isUserMsg: false,
        msg: ''
    }

    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }));
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }




    onSubmit = async (ev) => {
        ev.preventDefault();
        const { signUp } = this.props;
        const { email, password, fullName } = this.state;

        if (!email || !password || !fullName) {
            this.userMsgShow('All fields required');
            return
        }

        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!regexEmail.test(email)) {
            this.userMsgShow('Invalid Email');
            return
        }

        const userInfo = {
            email,
            password,
            fullName
        }
        try {
            await signUp(userInfo);
            this.props.history.push('/profile/testy/websites');
        } catch (err) {
            this.userMsgShow('Email Already in use');
        }

    }

    render() {
        const { isUserMsg, msg } = this.state;

        return (
            <>
                <Container className="signup-page-container" component="section" maxWidth="xs">
                    <CssBaseline />
                    <div className="flex column align-center">
                        <Avatar>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            SignUp
                        </Typography>

                        <form>
                            <TextField
                                autoComplete="fname"
                                name="fullName"
                                variant="outlined"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                                margin="normal"
                                onChange={this.handleChange}
                            />

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                onChange={this.handleChange}
                            />

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                margin="normal"
                                onChange={this.handleChange}

                            />

                            <Button
                                className="sign-up-btn"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onSubmit}
                            >
                                Sign Up
                        </Button>

                            <Grid container>
                                <Grid item>
                                    <Link to="/profile/login">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
                { isUserMsg && < UserMsg msg={msg} />}
            </>
        );
    }
}



const mapDispatchToProps = {
    signUp,
}



export const SignUp = connect(null, mapDispatchToProps)(_SignUp)
