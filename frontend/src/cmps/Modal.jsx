import React from 'react';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';
import SaveIcon from '@material-ui/icons/Save';

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
        const { onSubmit, isModalOpen } = this.props
        const { name } = this.state;
        return (
            <>
                <div className={`flex column align-center modal ${isModalOpen ? 'show' : ''}`}>
                    <label htmlFor="name">Website Name</label>
                    <input type="text"
                        autoFocus
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                        id="name"
                    />

                    <div className="publish-btns flex space-between">
                        <Button
                            title="Save to Drafts"
                            variant="contained"
                            onClick={() => onSubmit(this.state.name, false)}
                        >
                            <SaveIcon />
                            Save
                        </Button>
                        <Button
                            title="Publish site"
                            variant="contained"
                            onClick={() => onSubmit(this.state.name, true)}
                        >
                            <PublicIcon />
                            Publish
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}