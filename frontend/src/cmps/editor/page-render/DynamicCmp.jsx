import { SectionCmp } from './dynamic-render/SectionCmp'
import { SpanCmp } from './dynamic-render/SpanCmp'
import { DivCmp } from './dynamic-render/DivCmp'
import { FooterCmp } from './dynamic-render/FooterCmp'
import { HeaderCmp } from './dynamic-render/HeaderCmp'
import { ButtonCmp } from './dynamic-render/ButtonCmp'
import { NavCmp } from './dynamic-render/NavCmp'
import { IframeCmp } from './dynamic-render/IframeCmp'

export function DynamicCmp({ child, onReorderingElement, onRemoveElement, setEditingElement }) {
    const getCmp = (child) => {
        switch (child.type) {
            case 'section':
                return <SectionCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'span':
                return <SpanCmp
                    data={child}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'div':
                return <DivCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'footer':
                return <FooterCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'header':
                return <HeaderCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'button':
                return <ButtonCmp
                    data={child}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'nav':
                return <NavCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            case 'iframe':
                return <IframeCmp
                    data={child}
                    isContainer={child.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    setEditingElement={setEditingElement}
                />;

            default:
                console.log('wtf is this component you sent me???');
                break;
        }
    }
    return (
        getCmp(child)
    )
}