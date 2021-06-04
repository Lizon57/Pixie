import React from "react";

export function TemplatePreview({ template, onSetData }) {
    return (
        <div onClick={() => {
            const web = { ...template }
            delete web._id
            onSetData(web)
        }} style={{ backgroundImage: `url("${template.image}")` }} className="flex column space-between template-preview">
            <div className="flex justify-center align-center template-name">
                <span>{template.title}</span>
            </div>
            <div className="flex align-center justify-center template-hover-menu">
                <div className="fas edit-el-icn edit-template-button"></div>
            </div>
        </div>
    )
}