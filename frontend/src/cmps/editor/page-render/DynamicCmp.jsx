import { SectionCmp } from './dynamic-render/SectionCmp'
import { SpanCmp } from './dynamic-render/SpanCmp'
import { DivCmp } from './dynamic-render/DivCmp'
import { FooterCmp } from './dynamic-render/FooterCmp'
import { HeaderCmp } from './dynamic-render/HeaderCmp'
import { ButtonCmp } from './dynamic-render/ButtonCmp'
import { NavCmp } from './dynamic-render/NavCmp'
import { IframeCmp } from './dynamic-render/IframeCmp'

export function DynamicCmp({ child, onReorderingElement, onRemoveElement, setEditingElement }) {
    const prop = {
        data: child,
        onReorderingElement: onReorderingElement,
        onRemoveElement: onRemoveElement,
        setEditingElement: setEditingElement
    }
    const getCmp = (child) => {
        switch (child.type) {
            case 'section':
                return <SectionCmp {...prop} />;
            case 'span':
                return <SpanCmp {...prop} />;
            case 'div':
                return <DivCmp {...prop} />;
            case 'footer':
                return <FooterCmp {...prop} />;
            case 'header':
                return <HeaderCmp {...prop} />;
            case 'button':
                return <ButtonCmp {...prop} />;
            case 'nav':
                return <NavCmp {...prop} />;
            case 'iframe':
                return <IframeCmp {...prop} />;
            default:
                console.log('wtf is this component you sent me???');
                break;
        }
    }
    return (
        getCmp(child)
    )
}