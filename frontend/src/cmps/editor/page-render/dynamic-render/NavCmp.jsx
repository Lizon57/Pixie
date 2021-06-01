import { ElementToolBar } from "../../ElementToolBar";
import { ChildsPreview } from "../ChildsPreview";

export function NavCmp({ data, onReorderingElement, onRemoveElement, setEditingElement, isEdit }) {
    if (isEdit) {
        return (
            <nav
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
                    isContainer={data.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement} />

                {data.childs && data.childs.length > 0 &&
                    data.childs.map((child) => {
                        return <ChildsPreview
                            child={child}
                            key={child.id}
                            setEditingElement={setEditingElement}
                            onReorderingElement={onReorderingElement}
                            onRemoveElement={onRemoveElement}
                            isEdit={isEdit}

                        />
                    })}
            </nav >
        )
    }
    return (
        <nav
            data-id={data.id}
            className={data.prefs.className}
            style={{ ...data.prefs.style }}
        >
            {data.childs && data.childs.length > 0 &&
                data.childs.map((child) => {
                    return <ChildsPreview
                        child={child}
                        key={child.id}
                    />
                })}
        </nav >
    )
}