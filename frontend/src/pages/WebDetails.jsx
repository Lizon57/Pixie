import React from "react";
import { ChildsPreview } from '../cmps/editor/page-render/ChildsPreview'
import { webService } from '../service/web-service'
import { Loading } from '../cmps/Loading'

export class WebDetails extends React.Component {
    state = {
        web: '',
    }

    async componentDidMount() {
        const { webId } = this.props.match.params;
        const web = await webService.getById(webId)
        this.setState({ web })
    }


    render() {
        const { web } = this.state;
        if (!web) return <Loading />
        return (

            web.childs.map(child => <ChildsPreview child={child} key={child.id} />)
        )


    }
}