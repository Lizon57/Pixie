import React from 'react';
import { editorService } from '../../../service/editor-service';
import Slider from 'rc-slider';

export class EditBorder extends React.Component {
    state = {
    }

    render() {
        return (
            <>
                <div className="accordion-inner-title">Top border</div>
                <div className="accordion-inner-title">Bottom border</div>
                <div className="accordion-inner-title">Left border</div>
                <div className="accordion-inner-title">Right border</div>
            </>
        )
    }
}