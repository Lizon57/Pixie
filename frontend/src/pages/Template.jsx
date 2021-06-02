import React from "react";
import { Loading } from '../cmps/Loading'
import { connect } from 'react-redux';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action'
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

