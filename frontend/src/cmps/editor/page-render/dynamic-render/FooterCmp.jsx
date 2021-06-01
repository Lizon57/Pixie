import { ElementToolBar } from "../../ElementToolBar";
import { ChildsPreview } from "../ChildsPreview";

export function FooterCmp({ data, onReorderingElement, onRemoveElement, setEditingElement, editingElement, className }) {

    return (
        <footer
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
                isContainer={data.isContainer}
                id={data.id}
                onReorderingElement={onReorderingElement}
                onRemoveElement={onRemoveElement} />

            {data.childs && data.childs.length > 0 &&
                data.childs.map((child) => {
                    return <ChildsPreview
                        child={child}
                        editingElement={editingElement}
                        key={child.id}
                        setEditingElement={setEditingElement}
                        onReorderingElement={onReorderingElement}
                        onRemoveElement={onRemoveElement}
                    />
                })}
        </footer >
    )
}