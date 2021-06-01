import { ElementToolBar } from "../../ElementToolBar";

export function IframeCmp({ data, onReorderingElement, onRemoveElement, setEditingElement, provided, className }) {
    return (
        <iframe
            data-id={data.id}
            className={className}
            style={{ ...data.prefs.style }}
            src={data.prefs.src}
            title={data.prefs.src}
            onClick={(ev) => {
                ev.stopPropagation()
                const parentId = ev.target.parentElement.dataset.id;
                setEditingElement(data, parentId)
            }}
        >
            <ElementToolBar
                id={data.id}
                isContainer={data.isContainer}
                onReorderingElement={onReorderingElement}
                onRemoveElement={onRemoveElement} />
        </iframe >
    )
}