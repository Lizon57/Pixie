import { ElementToolBar } from "../../ElementToolBar";

export function SpanCmp({ data, onReorderingElement, onRemoveElement, setEditingElement, isEdit }) {
    if (isEdit) {
        return (
            <span
                data-id={data.id}
                className={data.prefs.className ? `${data.prefs.className} basic-product` : 'basic-product'}
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
    return (
        <span
            data-id={data.id}
            className={data.prefs.className}
            style={{ ...data.prefs.style }}
        >
            {data.txt}

        </span>
    )
}