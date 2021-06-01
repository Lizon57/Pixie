import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export class Modal extends React.Component {
    state = {
        name: '',
    }

    componentDidMount() {
        const { name } = this.props;
        if (name) this.setState({ name })
        return
    }


    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))
    }

    render() {
        const { toggleMenu, isModalOpen, onSubbmit } = this.props
        const { name } = this.state;
        return (
            <div>
                <Dialog open={isModalOpen} onClose={() => toggleMenu()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose your next step</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Your Website Name
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            id="name"
                            label="Site Name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            title="Save to Drafts"
                            variant="contained"
                            onClick={() => onSubbmit(this.state.name, false)}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            title="Publish site"
                            variant="contained"
                            onClick={() => onSubbmit(this.state.name, true)}
                        >
                            Publish
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}