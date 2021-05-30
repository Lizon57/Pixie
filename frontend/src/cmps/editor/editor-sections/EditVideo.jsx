import React from 'react';

export class EditVideo extends React.Component {





    render() {
        const { src } = this.props;
        return <input type="text" name="video" placeholder={src} />
    }
}