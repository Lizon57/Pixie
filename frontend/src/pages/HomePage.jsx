import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
import hero from '../assets/img/homepage/hero.gif';
import freedom from '../assets/img/homepage/freedom.png';
import customize from '../assets/img/homepage/customize.png';
import editor from '../assets/img/homepage/editor.png';
import { Loading } from '../cmps/Loading';
import { TemplatePreview } from "../cmps/TemplatePreview";

export class _HomePage extends React.Component {
    async componentDidMount() {
        await this.props.loadTemplates();
    }

    onSetData = (data) => {
        this.props.setData({ data });
        this.props.history.push('/editor');
    }



    render() {
        const { templates, isLoading } = this.props;

        return (
            <section className="homepage">
                <section className="flex align-center justify-center hero-container">
                    <div>
                        <h1 className="title">Create a website you're proud of with <span>Pixie!</span></h1>
                        <div className="flex wrap">
                            <div className="flex column wrap content-container">
                                <p>Pixie is an easy-to-use, strong &amp; uniquie platform for web building!</p>
                                <Link to="/template" className="text-center">Go Pixie!</Link>
                            </div>
                            <img src={hero} alt="Go Pixie!" />
                        </div>
                    </div>
                </section>


                <section>
                    <div className="guide-parse-background">
                        <ScrollAnimation animateIn='bounceInRight' duration='2'>
                            <section className="container" data-aos="fade-left">
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>The Freedom to Create the Websites You Want</h2>
                                        <p>
                                            Design and build your own high-quality websites.
                                            Whether you’re promoting your business,
                                            showcasing your work,
                                    you can do it all with the <span>Pixie</span> website Editor.</p>
                                    </div>
                                    <img src={freedom} alt="guide parse" />
                                </div>
                            </section>
                        </ScrollAnimation>
                    </div>


                    <div className="guide-parse-background">
                        <ScrollAnimation animateIn='bounceInLeft' duration='2'>
                            <section className="container">
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>Customize your site</h2>
                                        <p>Pick a template and customize anything,
                                    or answer a few questions and get a free website designed just for you</p>
                                    </div>
                                    <img src={customize} className="parse-even" alt="guide parse" />
                                </div>
                            </section>
                        </ScrollAnimation>
                    </div>

                    <div className="guide-parse-background">
                        <ScrollAnimation animateIn='bounceInRight' duration='2'>
                            <section className="container">
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>Pixie Editor</h2>
                                        <p>Start from scratch or choose from over designer-made templates that you can fully
                                    customize using <span>Pixie</span> website Editor.</p>
                                    </div>
                                    <img src={editor} alt="guide parse" />
                                </div>
                            </section>
                        </ScrollAnimation>
                    </div>

                </section>

                <section className="container templates-container">
                    <Link to="/template" className="text-center"><h2>Templates</h2></Link>
                    {isLoading && <Loading />}
                    {!isLoading &&
                        <div className="grid templates-preview-container">
                            <div onClick={() => {
                                localStorage.removeItem('website');
                                this.onSetData({ childs: [] })
                            }} className="flex column space-between template-preview make-new">
                                <div className="flex justify-center align-center template-name-new">
                                    <span>Make New</span>
                                </div>
                                <div className="flex align-center justify-center template-hover-menu">
                                    <div className="fas plus-icon edit-template-button"></div>
                                </div>
                            </div>
                            {templates.slice(0, 5).map(template => <TemplatePreview key={template._id} onSetData={this.onSetData} template={template} />)}
                        </div>
                    }
                </section>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {
        templates: state.templateModule.templates,
        isLoading: state.templateModule.isLoading,
    }
}


const mapDispatchToProps = {
    loadTemplates,
    setData
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)