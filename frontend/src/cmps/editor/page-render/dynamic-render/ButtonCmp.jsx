import { ElementToolBar } from "../../ElementToolBar";

export function ButtonCmp({ data, setEditingElement, onReorderingElement, onRemoveElement, className }) {

    return (
        <button
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

        </button>
    )
}