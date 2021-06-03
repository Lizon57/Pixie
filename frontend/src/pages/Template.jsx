import React from "react";
import { connect } from 'react-redux';
import { Loading } from '../cmps/Loading';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
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
            <div className="grid template-list ">

                {/* Make new website */}
                <div onClick={() => this.onSetData({ childs: []})} className="flex column space-between template-preview make-new">
                    <div className="flex justify-center align-center template-name">
                        <span>Make New</span>
                    </div>
                    <div className="flex align-center justify-center template-hover-menu">
                        <div className="fas plus-icon edit-template-button"></div>
                    </div>
                </div>
                {templates.map(template => <TemplatePreview key={template._id} onSetData={this.onSetData} template={template} />)}
            </div>
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

