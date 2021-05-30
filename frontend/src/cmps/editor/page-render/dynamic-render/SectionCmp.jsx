import { ElementToolBar } from "../../ElementToolBar";
import { ChildsPreview } from "../ChildsPreview";


export function SectionCmp({ data, setEditingElement, onReorderingElement, onRemoveElement }) {
    return (
        <section
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

            {data.childs &&
                data.childs.map((child) => {
                    return <ChildsPreview
                        child={child}
                        key={child.id}
                        setEditingElement={setEditingElement}
                        onReorderingElement={onReorderingElement}
                        onRemoveElement={onRemoveElement}
                    />
                })}

        </section >
    )
}