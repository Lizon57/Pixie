import React from 'react';
import { connect } from 'react-redux';
import { setEditingElement } from '../../../store/actions/editor-actions';
import { setData } from '../../../store/actions/data-actions';
import { utilService } from '../../../service/util-service';
import { ChildsPreview } from './ChildsPreview';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class _PageRenderV2 extends React.Component {

    reorder = (startIndex, endIndex) => {
        const { childs } = this.props;
        let elDragged = childs.splice(startIndex, 1)
        elDragged = elDragged[0];
        childs.splice(endIndex, 0, elDragged)
        return childs
    }

    onDragEnd = (result) => {
        if (!result.destination) return
        this.reorder(
            result.source.index,
            result.destination.index
        )
    }


    render() {
        const { childs, onReorderingElement, onRemoveElement, setEditingElement, editingElement } = this.props

        if (!childs && childs.length === 0) return <div className="site-container">No cmps dragged yet, drag a component to start edit</div>
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="childs">
                    {(provided) => (
                        <section
                            data-id={utilService.makeId()}
                            className="site-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {childs.map((child, idx) => {
                                return <ChildsPreview
                                    child={child}
                                    editingElement={editingElement}
                                    key={child.id}
                                    isContainer={child.isContainer}
                                    setEditingElement={setEditingElement}
                                    onReorderingElement={onReorderingElement}
                                    onRemoveElement={onRemoveElement}
                                    idx={idx}
                                />
                            })}
                            {provided.placeholder}
                        </section>
                    )}
                </Droppable>
            </DragDropContext>

        )
    }
}

const mapDispatchToProps = {
    setEditingElement,
    setData
}

function mapStateToProps(state) {
    return {
        editingElement: state.editorModule.editingElement
    }
}

export const PageRender = connect(mapStateToProps, mapDispatchToProps)(_PageRenderV2)