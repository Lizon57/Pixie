export function ElementToolBar({ onReorderingElement, onRemoveElement, id, isContainer=false }) {
    return (
        <div className={"element-tool-bar " + (isContainer ? 'container ' : '')}>
            <span onClick={() => onRemoveElement(id)} className="fas trash-icn"></span>
            <span onClick={() => onReorderingElement(id, -1)} className="fas up-arrow-icn"></span>
            <span onClick={() => onReorderingElement(id, 1)} className="fas down-arrow-icn"></span>
            <span className="fas edit-el-icn"></span>
        </div>
    )
}