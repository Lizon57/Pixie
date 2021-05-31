import React from 'react';
import { cloudinaryService } from '../../../service/cloudinary-service';

export class EditImgSrc extends React.Component {
    uploadImg = async (ev) => {
        const { onChangeSpecialInput } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);

        onChangeSpecialInput('backgroundImage', `url('${url}')`);
    }


    render() {
        return (
            <div className="flex align-center editor-pref-warper">
                <span className="editor-label">Upload:</span>
                <input type="file" onChange={this.uploadImg} />
            </div>
        )
    }
}