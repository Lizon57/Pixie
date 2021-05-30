import React from 'react';
import { editorService } from '../../../service/editor-service';
import Slider from 'rc-slider';

export class EditBoxStyling extends React.Component {
    render() {
        let { backgroundColor, borderRadius, height, width, onChangeSpecialInput, onChangeValue } = this.props;

        // assign default values if the given value is undefined
        backgroundColor = !backgroundColor ? '#ffffff' : backgroundColor;

        // Handle parameters with 'px'
        const strippedPropsFromPx = {
            borderRadius: (borderRadius) ? editorService.stripFromPx(borderRadius) : 0,
            height: (height) ? editorService.stripFromPx(height) : 100,
            width: (width) ? editorService.stripFromPx(width) : 0
        }

        return (
            <>
                <div className="accordion-inner-title">Background</div>
                <div className="accordion-inner-content">
                    {/* Edit background color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="backgroundColor">Color: </label>
                        <input type="color" id="color" name="backgroundColor" value={backgroundColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{backgroundColor}</span>
                    </div>

                    {/* Edit circling */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Circling:</span>
                        <Slider min={0} max={50} value={strippedPropsFromPx.borderRadius} onChange={(value) => onChangeSpecialInput('borderRadius', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderRadius} px</span>
                    </div>
                </div>

                <div className="accordion-inner-title">Sizing</div>
                <div className="accordion-inner-content">
                    {/* Edit box height */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Height:</span>
                        <Slider min={10} max={1000} value={strippedPropsFromPx.height} onChange={(value) => onChangeSpecialInput('height', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.height} px</span>
                    </div>

                    {/* Edit box width */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Width:</span>
                        <Slider min={10} max={1000} value={strippedPropsFromPx.width} onChange={(value) => onChangeSpecialInput('width', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.width} px</span>
                    </div>
                </div>
            </>
        )
    }
}