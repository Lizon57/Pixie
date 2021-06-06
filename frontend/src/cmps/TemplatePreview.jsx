import React from "react";

export function TemplatePreview({ template, onSetData }) {
    return (

        <div className="template-card-container">
            <div onClick={() => {
                const web = { ...template }
                delete web._id
                onSetData(web)
            }}
                className="template-card">
                <div className="template-bar">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div style={{ backgroundImage: `url("${template.image}")` }} className="template-img">
                    <div className="template-img-hover">
                        <button>Edit</button>
                    </div>
                </div>
                <div className="template-title">{template.title}</div>
            </div>
        </div>

        // <div onClick={() => {
        //     const web = { ...template }
        //     delete web._id
        //     onSetData(web)
        // }} style={{ backgroundImage: `url("${template.image}")` }} className="flex column space-between template-preview">
        //     <div className="flex justify-center align-center template-name">
        //         <span>{template.title}</span>
        //     </div>
        //     <div className="flex align-center justify-center template-hover-menu">
        //         <div className="fas edit-el-icn edit-template-button"></div>
        //     </div>
        // </div>
    )
}