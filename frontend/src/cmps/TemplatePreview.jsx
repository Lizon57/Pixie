import React from "react";



export function TemplatePreview({ template, onSetData }) {
    return (
        <div className="templete-card flex align-center justify-center  column">
            <h3>{template.title}</h3>
            <img src={template.image} alt={template.name} />
            <div className="flex align-center justify-center template-btn">
                <div onClick={() => onSetData(template)} className="fas pointer option edit-el-icn"></div>
            </div>
        </div>
    )


}