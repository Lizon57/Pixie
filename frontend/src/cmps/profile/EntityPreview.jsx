export function EntityPreview({ entity }) {

    return (
        <div className="entity-preview">
            <div className="entity-name">
                <span>{entity.name}</span>
            </div>
            <div className="entity-hover">
                <div className="option fas edit-el-icn"></div>
                <div className="option fas eye"></div>
                <div className="option fas trash"></div>
            </div>
        </div>
    )
}