import { ElementToolBar } from "../../ElementToolBar";

export function SpanCmp({ data, onReorderingElement, onRemoveElement, setEditingElement, className }) {
    return (
        <span
            data-id={data.id}
            className={className}
            style={{ ...data.prefs.style }}
            onClick={(ev) => {
                ev.stopPropagation()
                const parentId = ev.target.parentElement.dataset.id;
                setEditingElement(data, parentId)
            }}
        >
            <ElementToolBar
                id={data.id}
                onReorderingElement={onReorderingElement}
                onRemoveElement={onRemoveElement} />
            {data.txt}

        </span>
    )
}