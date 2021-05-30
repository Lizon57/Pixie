import { DynamicCmp } from './DynamicCmp'
import { Draggable } from 'react-beautiful-dnd'


export function ChildsPreview({ child, onReorderingElement, onRemoveElement, setEditingElement, idx }) {
    if (idx !== undefined) {
        return (
            <Draggable key={child.id} draggableId={child.id} index={idx}>
                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <DynamicCmp
                            child={child}
                            key={child.id}
                            setEditingElement={setEditingElement}
                            onReorderingElement={onReorderingElement}
                            onRemoveElement={onRemoveElement}
                        />
                    </div>
                )}
            </Draggable>
        )
    } else {
        return <DynamicCmp
            child={child}
            key={child.id}
            setEditingElement={setEditingElement}
            onReorderingElement={onReorderingElement}
            onRemoveElement={onRemoveElement}
        />
    }

}