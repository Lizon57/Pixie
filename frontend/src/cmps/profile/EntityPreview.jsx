export function EntityPreview({ entity, onSetData, onDeleteEntity }) {

    return (
        <div className="flex column space-between entity-preview">
            <div className="flex justify-center align-center entity-name">
                <span>{entity.name}</span>
                <span className="state">{entity.isPublished ? '(Published)' : '(Draft)'}</span>
            </div>
            <div className="flex align-center entity-hover-menu">
                <div onClick={() => onSetData(entity)} className="fas pointer option edit-el-icn"></div>
                {entity.isPublished && <div className="fas pointer option watch-icn"></div>}
                <div onClick={() => onDeleteEntity(entity._id)} className="fas pointer option trash-icn"></div>
            </div>
        </div>
    )
}