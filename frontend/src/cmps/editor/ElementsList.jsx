import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { cloudinaryService } from '../../service/cloudinary-service';
import { editorService } from '../../service/editor-service';
import { UserMsg } from '../../cmps/UserMsg';
import sportsHeader from '../../assets/img/editor/elements/sportsHeader.jpg';
import maizHeader from '../../assets/img/editor/elements/maizHeader.jpg';
import cofeeHeader from '../../assets/img/editor/elements/cofeeHeader.jpg';
import sportsHero from '../../assets/img/editor/elements/sportsHero.jpg';
import diamondsHero from '../../assets/img/editor/elements/diamondsHero.jpg';
import seaHero from '../../assets/img/editor/elements/seaHero.jpg';
import maizHero from '../../assets/img/editor/elements/maizHero.jpg';
import cofeeHero from '../../assets/img/editor/elements/cofeeHero.jpg';
import threeCards from '../../assets/img/editor/elements/threeCards.jpg';
import cofeeCards from '../../assets/img/editor/elements/cofeeCards.jpg';
import fullWidthImgFirstCard from '../../assets/img/editor/elements/fullWidthImgFirstCard.jpg';
import fullWidthTxtFirstCard from '../../assets/img/editor/elements/fullWidthTxtFirstCard.jpg';
import maizCards from '../../assets/img/editor/elements/maizCards.jpg';
import cofeeForm from '../../assets/img/editor/elements/cofeeForm.jpg';
import maizFooter from '../../assets/img/editor/elements/maizFooter.jpg';
import cofeeFooter from '../../assets/img/editor/elements/cofeeFooter.jpg';
import maizText from '../../assets/img/editor/elements/maizText.jpg';
import cofeeText from '../../assets/img/editor/elements/cofeeText.jpg';


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
                            <img src={sportsHeader} alt="Sports header" onClick={() => onAddSection('sportsHeader')} />
                            <div className="text-center pointer item" onClick={() => onAddSection('header4')}>Header 4</div>
                            <img src={maizHeader} alt="Maiz header" onClick={() => onAddSection('MaizHeader')} />
                            <img src={cofeeHeader} alt="Cofee header" onClick={() => onAddSection('CoffeeHeader')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Heros
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={sportsHero} alt="Sports header" onClick={() => onAddSection('sportsHero')} />
                            <img src={diamondsHero} alt="Diamonds header" onClick={() => onAddSection('hero1')} />
                            <img src={seaHero} alt="Sea header" onClick={() => onAddSection('hero2')} />
                            <img src={maizHero} alt="Maiz header" onClick={() => onAddSection('MaizHero')} />
                            <img src={cofeeHero} alt="Cofee header" onClick={() => onAddSection('CofeeHero')} />
                            <div className="text-center pointer item" onClick={() => onAddSection('StyleHero')}>Style Hero</div>
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
                            <img src={threeCards} alt="Three cards" onClick={() => onAddSection('cards2')} />
                            <img src={fullWidthImgFirstCard} alt="Full width image first card" onClick={() => onAddSection('fullWidthCardImgFirst')} />
                            <img src={fullWidthTxtFirstCard} alt="Full width text first card" onClick={() => onAddSection('fullWidthCardTextFirst')} />
                            <img src={maizCards} alt="Maiz cards" onClick={() => onAddSection('MaizCards')} />
                            <img src={cofeeCards} alt="Cofee cards" onClick={() => onAddSection('CofeeCards')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Contact
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={cofeeForm} alt="Cofee Form" onClick={() => onAddSection('CofeeForm')} />
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
                            <img src={maizFooter} alt="Maiz footer" onClick={() => onAddSection('MaizFooter')} />
                            <img src={cofeeFooter} alt="Cofee footer" onClick={() => onAddSection('CoffeeFooter')} />
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
                            <div className="text-center pointer item" onClick={() => onAddElement('text')}>Inside Box Text</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('StyleTextSection')}>Style Text</div>
                            <div className="text-center pointer item" onClick={() => onAddElement('text')}>Text Inside</div>
                            <img src={maizText} alt="Maiz text" onClick={() => onAddSection('MaizTextSection')} />
                            <img src={cofeeText} alt="Cofee text" onClick={() => onAddSection('CoffeeTextSection')} />
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