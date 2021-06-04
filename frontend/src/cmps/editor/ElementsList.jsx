import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { cloudinaryService } from '../../service/cloudinary-service';
import { editorService } from '../../service/editor-service';
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
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('header1')}>Header 1</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('header2')}>Header 2</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('sportsHeader')}>Sports header</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('header4')}>Header 4</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('MaizHeader')}>Maiz Header</div>
                            {/* <div className="text-center pointer item" onClick={() => onAddSection('NavBar')}>Header 2</div> */}
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Heros
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('sportsHero')}>Sports hero</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('hero1')}>Hero1</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('hero2')}>Hero2</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('MaizHero')}>Maiz Hero</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Cards
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('cards')}>Cards</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('cards1')}>Cards1</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('cards2')}>Cards2</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('fullWidthCardImgFirst')}>Full width img first</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('fullWidthCardTextFirst')}>Full width text first</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('MaizCards')}>Maiz Cards</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Footers
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('footer')}>Footer</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('footer1')}>Footer1</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('MaizFooter')}>Maiz Footer</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Texts
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('text')}>Text Box</div>
                            <div className="text-center pointer item" onClick={() => onAddElement('text')}>Text Inside</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('MaizTextSection')}>Maiz Text</div>
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