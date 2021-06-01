import { SectionCmp } from './dynamic-render/SectionCmp'
import { SpanCmp } from './dynamic-render/SpanCmp'
import { DivCmp } from './dynamic-render/DivCmp'
import { FooterCmp } from './dynamic-render/FooterCmp'
import { HeaderCmp } from './dynamic-render/HeaderCmp'
import { ButtonCmp } from './dynamic-render/ButtonCmp'
import { NavCmp } from './dynamic-render/NavCmp'
import { IframeCmp } from './dynamic-render/IframeCmp'

export function DynamicCmp({ child, onReorderingElement, onRemoveElement, setEditingElement, isEdit, editingElement }) {

    function getClassName(child, editingElement) {
        if (editingElement && child.id === editingElement.id) {
            console.log(child.id, editingElement.id);
            return child.prefs.className ? `${child.prefs.className} basic-product in-editing` : 'basic-product in-editing'
        } else {
            return child.prefs.className ? `${child.prefs.className} basic-product` : 'basic-product'
        }
    }

    const getCmp = (child) => {

        const className = getClassName(child, editingElement);

        const props = {
            data: child,
            editingElement,
            className,
            isContainer: child.isContainer,
            onReorderingElement: onReorderingElement,
            onRemoveElement: onRemoveElement,
            setEditingElement: setEditingElement,
            isEdit: isEdit
        }


        switch (child.type) {
            case 'section':
                return <SectionCmp {...props} />;
            case 'span':
                return <SpanCmp {...props} />;
            case 'div':
                return <DivCmp {...props} />;
            case 'footer':
                return <FooterCmp {...props} />;
            case 'header':
                return <HeaderCmp {...props} />;
            case 'button':
                return <ButtonCmp {...props} />;
            case 'nav':
                return <NavCmp {...props} />;
            case 'iframe':
                return <IframeCmp {...props} />;

            default:
                console.log('wtf is this component you sent me???');
                break;
        }
    }

    return (
        getCmp(child)
    )
}