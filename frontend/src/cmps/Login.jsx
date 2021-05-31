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
        isMsg: false,
        msg: '',
    }


    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))

    }

    onSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const { onLoadUser } = this.props;
            const { email, password, isMsg } = this.state;
            if (!email || !password) {
                this.setState({ isMsg: !isMsg, msg: 'Email address and password required.' });
                setTimeout(() => {
                    const { isMsg } = this.state;
                    this.setState({ isMsg: !isMsg });
                }, 2000);
                return;
            }
            const credentials = {
                email,
                password,
            }
            await loadUser(credentials)
            // this.props.history.push('/editor');
        }

        catch (err) {
            const { isMsg } = this.state;
            this.setState({ isMsg: !isMsg, msg: 'Invalid Mail / Password' });
            setTimeout(() => {
                const { isMsg } = this.state;
                this.setState({ isMsg: !isMsg })
            }, 2000);
        }
    }


    render() {
        const { isMsg, msg } = this.state;

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
                {isMsg && < UserMsg msg={msg} />}
            </>
        );
    }
}



const mapDispatchToProps = {
    loadUser,
}



export const Login = connect(null, mapDispatchToProps)(_Login)
