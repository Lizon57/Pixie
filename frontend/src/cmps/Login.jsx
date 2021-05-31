import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { loadUser } from '../store/actions/user-actions';
import { UserMsg } from './UserMsg.jsx';



class _Login extends React.Component {
    state = {
        email: '',
        password: '',
        isUserMsg: false,
        msg: '',
    }


    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))

    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }


    onSubmit = async (ev) => {
        ev.preventDefault();
        const { loadUser } = this.props;
        const { email, password } = this.state;
        if (!email || !password) {
            this.userMsgShow('Email address and password required');
            return
        }

        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!regexEmail.test(email)) {
            this.userMsgShow('Invalid Email');
            return
        }

        const credentials = {
            email,
            password,
        }
        try {
            await loadUser(credentials)
            this.props.history.push('/profile/testy/websites');
        } catch (err) {
            this.userMsgShow('Invalid Email or Password');
        }
    }


    render() {
        const { isUserMsg, msg } = this.state;

        return (
            <>
                <Container className="login-page-container" component="section" maxWidth="xs">
                    <CssBaseline />
                    <div className="flex column align-center">
                        <Avatar>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>

                        <form>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChange}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onSubmit}
                            >
                                Login
                            </Button>

                            <Grid container>
                                <Grid item>
                                    <Link to="/profile/signup" >
                                        {"Don't have an account? SignUp"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
                {isUserMsg && < UserMsg msg={msg} />}
            </>
        );
    }
}



const mapDispatchToProps = {
    loadUser,
}



export const Login = connect(null, mapDispatchToProps)(_Login)
