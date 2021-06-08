import React from 'react';
import { cloudinaryService } from '../../../service/cloudinary-service';

export class EditImgSrc extends React.Component {
    uploadImg = async (ev) => {
        const { onChangeSrc } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);

        onChangeSrc('backgroundImage', `url('${url}')`);
    }


    render() {
        return (
            <div className="flex align-center edit-img-src">
                <span className="editor-label">Upload:</span>
                <label className="src-input-btn" htmlFor="change-src">Choose a file...</label>
                <input className="src-input" id="change-src" type="file" onChange={this.uploadImg} />
            </div>
        )
    }
}