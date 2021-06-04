import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { cloudinaryService } from '../../service/cloudinary-service';
import { editorService } from '../../service/editor-service';
import {
    sportsHeader, maizHeader, coffeeHeader,
    sportsHero, diamondsHero, seaHero, maizHero, coffeeHero,
    threeCards, coffeeCards, fullWidthImgFirstCard, fullWidthTxtFirstCard, maizCards,
    coffeeForm,
    maizFooter, coffeeFooter,
    maizText, coffeeText
} from '../../service/element-img-service';
import { UserMsg } from '../../cmps/UserMsg';


export class ElementsList extends React.Component {
    state = {
        src: '',
        isUserMsg: false,
        msg: '',
    }

    handleChanges = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))

    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    uploadImg = async (ev) => {
        const { onAddElement } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);
        onAddElement('img', url);
    }

    onSubmit = () => {
        const { onAddSection } = this.props;
        const { src } = this.state;
        // empty src check
        if (!src) {
            this.userMsgShow('Not Found');
            return;
        }
        // regex src check
        const regexYoutube = new RegExp(/^((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/))[\S]+/i);
        if (!regexYoutube.test(src)) {
            this.userMsgShow('Broken Youtube URL');
            return;
        }
        const fixedSrc = editorService.getFixedYoutubeUrl(src);
        onAddSection('youtube', fixedSrc);
        this.setState({ src: '', isUserMsg: false, msg: '' });
    }

    render() {
        const { onAddElement, onAddSection } = this.props;
        const { isUserMsg, msg } = this.state;
        return (
            <div className="editor-elements-list">
                <Accordion allowZeroExpanded="true" allowMultipleExpanded="false">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Box
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('box')}>Empty Box</div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Navigation bars
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <div className="text-center pointer item" onClick={() => onAddSection('header1')}>Header 1</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('header2')}>Header 2</div>
                            <img src={sportsHeader['default']} alt="Sports header" onClick={() => onAddSection('sportsHeader')} />
                            <div className="text-center pointer item" onClick={() => onAddSection('header4')}>Header 4</div>
                            <img src={maizHeader['default']} alt="Maiz header" onClick={() => onAddSection('MaizHeader')} />
                            <img src={coffeeHeader['default']} alt="coffee header" onClick={() => onAddSection('CoffeeHeader')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Heros
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={sportsHero['default']} alt="Sports header" onClick={() => onAddSection('sportsHero')} />
                            <img src={diamondsHero['default']} alt="Diamonds header" onClick={() => onAddSection('hero1')} />
                            <img src={seaHero['default']} alt="Sea header" onClick={() => onAddSection('hero2')} />
                            <img src={maizHero['default']} alt="Maiz header" onClick={() => onAddSection('MaizHero')} />
                            <img src={coffeeHero['default']} alt="coffee header" onClick={() => onAddSection('CoffeeHero')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Cards
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <div className="text-center pointer item" onClick={() => onAddSection('cards')}>Cards</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('cards1')}>Cards1</div>
                            <img src={threeCards['default']} alt="Three cards" onClick={() => onAddSection('cards2')} />
                            <img src={fullWidthImgFirstCard['default']} alt="Full width img first card" onClick={() => onAddSection('fullWidthCardImgFirst')} />
                            <img src={fullWidthTxtFirstCard['default']} alt="Full width text first card" onClick={() => onAddSection('fullWidthCardTextFirst')} />
                            <img src={maizCards['default']} alt="Maiz cards" onClick={() => onAddSection('MaizCards')} />
                            <img src={coffeeCards['default']} alt="coffee cards" onClick={() => onAddSection('CoffeeCards')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Contact
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={coffeeForm['default']} alt="coffee Form" onClick={() => onAddSection('CoffeeForm')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Footers
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <div className="text-center pointer item" onClick={() => onAddSection('footer')}>Footer</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('footer1')}>Footer1</div>
                            <img src={maizFooter['default']} alt="Maiz footer" onClick={() => onAddSection('MaizFooter')} />
                            <img src={coffeeFooter['default']} alt="coffee footer" onClick={() => onAddSection('CoffeeFooter')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Texts
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <div className="text-center pointer item" onClick={() => onAddSection('text')}>Text Box</div>
                            <div className="text-center pointer item" onClick={() => onAddElement('text')}>Text Inside</div>
                            <img src={maizText['default']} alt="Maiz text" onClick={() => onAddSection('MaizTextSection')} />
                            <img src={coffeeText['default']} alt="coffee text" onClick={() => onAddSection('CoffeeTextSection')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Images
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="file-upload">
                                <input type="file"
                                    style={{ display: 'block', marginTop: '10px' }}
                                    onChange={this.uploadImg} />
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Maps
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('map')}>Map</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('mapWithTxt')}>Map with text</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Videos
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex column video">
                                <input type="text" value={this.state.src} name="src"
                                    placeholder="YouTube URL" onChange={this.handleChanges} />
                                <button className="text-center pointer" onClick={this.onSubmit}>OK</button>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {isUserMsg && <UserMsg msg={msg} />}
            </div>
        );
    }
}