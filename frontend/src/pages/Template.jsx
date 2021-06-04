import React from "react";
import { connect } from 'react-redux';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
import { Loading } from '../cmps/Loading';
import { TemplatePreview } from "../cmps/TemplatePreview";


class _Template extends React.Component {

    async componentDidMount() {
        await this.props.loadTemplates();
    }

    onSetData = (data) => {
        this.props.setData({ data });
        this.props.history.push('/editor');
    }


    render() {
        const { templates, isLoading } = this.props;
        if (isLoading) return <Loading />
        return (
            <>
                <div className="grid template-list ">

                    {/* Make new website */}

                    <div onClick={() => this.onSetData({ childs: [] })} className="flex column space-between template-preview make-new">
                        <div className="flex justify-center align-center template-name-new">
                            <span>Make New</span>
                        </div>
                        <div className="flex align-center justify-center template-hover-menu">
                            <div className="fas plus-icon edit-template-button"></div>
                        </div>
                    </div>
                    {templates.map(template => <TemplatePreview key={template._id} onSetData={this.onSetData} template={template} />)}
                </div>

                <header className="header11">
                    <span className="logo">THE COFFEE GURU</span>
                    <span className="menu nav-desktop">Coffee</span>
                    <span className="menu nav-desktop">Brewing</span>
                    <span className="menu nav-desktop">Guide</span>
                    <span className="fas hamburger-icon"></span>
                </header>

                <div className="hero11">
                    <div className="hero-left">
                        <div className="span-container11">
                            <span>Don't let bad </span><span className="span112">coffee </span>spoil your day. Brew better coffee <span className="span112">today!</span>
                        </div>
                        <span className="span113">Learn about the latest coffee gear and brewing techniques today with our informative coffee guides. Brewing coffee shouldn't be rocket science. Let us help! Stay informed with the latest coffee information today with The Coffee Guru coffee blog!</span>
                        <button>JOIN TODAY</button>
                    </div>
                    <div className="hero-right">
                        <div className="image11"></div>
                    </div>
                </div>

                <div className="text-container11">
                    <span className="span115">So, you want to learn about coffee? Let us help!</span>
                    <span className="span116">What would you like to learn about?</span>
                </div>

                <div className="card-container11">
                    <div className="card11">
                        <div className="card-img11"></div>
                        <div className="card-span11">
                            <span className="title11">COFFEE</span>
                            <span className="span117">e beans, coffee roasts and coffee drinks!</span>
                        </div>
                    </div>
                    <div className="card11">
                        <div className="card-img11"></div>
                        <div className="card-span11">
                            <div className="title11">COFFEE</div>
                            <div className="span117">Learn about coffee and all the various types of coffee beans, coffee roasts and coffee drinks!</div>
                        </div>
                    </div>
                </div>

                <div className="form-div">
                    <div className="form11">
                        <div className="form-open">
                            <span className="span120">SUBSCRIBE TO</span>
                            <span className="span121">THE COFFEE GURU</span>
                        </div>
                        <span className="span122">Stay connected and stay informed with The Coffee Guru. Get the freshest coffee content straight to your inbox without having to miss a thing!</span>
                        <input type="text" placeholder="NAME"></input>
                        <input type="text" placeholder="EMAIL"></input>
                        <button>SIGN ME UP</button>
                    </div>
                </div>

                <footer className="footer11">
                    <span className="logo">&copy; The Coffee Guru</span>
                    <span className="small11">We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com and affiliated sites.</span>
                </footer>
            </>
        )
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

export const Template = connect(mapStateToProps, mapDispatchToProps)(_Template)

