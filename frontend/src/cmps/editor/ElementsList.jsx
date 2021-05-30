import React from 'react';
import { cloudinaryService } from '../../service/cloudinaryService'
import { UserMsg } from '../../cmps/UserMsg'
import TextField from '@material-ui/core/TextField';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


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

    fixYoutubeUrl = (src) => {
        if (src.includes('watch?v=')) {
            src = src.replace('watch?v=', 'embed/');
        }
        if (src.includes('&')) {
            let idx = src.indexOf('&');
            src = src.slice(0, idx);
        }
        return src;
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    uploadImg = async (ev) => {
        const { onAddElement, onAddSection } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);
        onAddElement('img', url)
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
        const fixedSrc = this.fixYoutubeUrl(src);
        onAddSection('youtube', fixedSrc)
        this.setState({ src: '', isUserMsg: false, msg: '' })
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
                            <div className="text-center pointer item" onClick={() => onAddSection('navBar')}>Navigation</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('header1')}>Header 1</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Heros
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('hero')}>Hero</div>
                            <div className="text-center pointer item" onClick={() => onAddSection('hero1')}>Hero1</div>
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
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Texts
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddElement('text')}>Text</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Images
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <input type="file"
                                style={{ display: 'block', marginTop: '10px' }}
                                onChange={this.uploadImg} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Maps
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddElement('map')}>Map</div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Videos
                        </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <input type="text" value={this.state.src} name="src" style={{ display: 'block', width: '100%' }} className="item"
                                placeholder="YouTube URL" onChange={this.handleChanges} />
                            <button className="text-center pointer item" onClick={this.onSubmit}>OK</button>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {isUserMsg && <UserMsg msg={msg} />}
            </div>
        );
    }
}