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
        review: '',
    }
    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))
    }
    onSubmit = () => {
        console.log(this.state)
    }
    render() {
        const { handleClose, isShown } = this.props
        return (
            <div>
                <Dialog open={isShown} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Toy Review</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add Your Review
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="review"
                            id="review"
                            label="Review"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.onSubmit}
                        >
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}