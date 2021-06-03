import React from "react";

export function TemplatePreview({ template, onSetData }) {

    console.log();

    return (
        // <div className="templete-card flex align-center justify-center  column">
        //     <h3>{template.title}</h3>
        //     <img src={template.image} alt={template.name} />
        //     <div className="flex align-center justify-center template-btn">
        //         <div onClick={() => onSetData(template)} className="fas pointer option edit-el-icn"></div>
        //     </div>
        // </div>

        <div onClick={() => onSetData(template)} style={{ backgroundImage: `url("${template.image}")` }} className="flex column space-between template-preview">
            <div className="flex justify-center align-center template-name">
                <span>{template.title}</span>
            </div>
            <div className="flex align-center justify-center template-hover-menu">
                <div className="fas edit-el-icn edit-template-button"></div>
            </div>
        </div>
    )
}