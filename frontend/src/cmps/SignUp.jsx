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
        isMsg: false,
        msg: ''
    }

    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }));
    }

    onSubmit = async (ev) => {
        ev.preventDefault();
        const { onSignUp } = this.props;
        const { email, password, fullName, isMsg } = this.state;
        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

        if (!email || !password || !fullName) {
            this.setState({ isMsg: !isMsg, msg: 'All fields required.' });
            setTimeout(() => {
                this.setState({ isMsg: !isMsg });
            }, 2000);
            return;
        }
        else if (!regexEmail.test(email)) {
            this.setState({ isMsg: !isMsg, msg: 'Invalid Email' })
            setTimeout(() => {
                const { isMsg } = this.state;
                this.setState({ isMsg: !isMsg })
            }, 2000);
            return;
        }

        const userInfo = {
            email,
            password,
            fullName
        }

        await signUp(userInfo);
        this.props.history.push('/editor');
    }

    render() {
        const { isMsg, msg } = this.state;

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
                { isMsg && < UserMsg msg={msg} />}
            </>
        );
    }
}



const mapDispatchToProps = {
    signUp,
}



export const SignUp = connect(null, mapDispatchToProps)(_SignUp)
