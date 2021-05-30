export function ElementToolBar({ onReorderingElement, onRemoveElement, id, isContainer=false }) {
    return (
        <div className={"element-tool-bar " + (isContainer ? 'container ' : '')}>
            <span onClick={() => onRemoveElement(id)} className="fas tool-bar-icn trash"></span>
            <span onClick={() => onReorderingElement(id, -1)} className="fas tool-bar-icn up-arrow"></span>
            <span onClick={() => onReorderingElement(id, 1)} className="fas tool-bar-icn down-arrow"></span>
            <span className="fas tool-bar-icn edit"></span>
        </div>
    )
}