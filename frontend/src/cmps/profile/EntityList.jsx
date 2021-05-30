import React from 'react'
import { Loading } from '../Loading'

export class EntityList extends React.Component {
    state = {
        entities: null,
    }

    async componentDidMount() {
        const entities = await this.getEntity()
        console.log('entered!', entities);
        this.setState({ entities })
    }

    async componentDidUpdate(prevProps) {
        console.log(this.props.match.params.entityType);
        console.log(prevProps.match.params.entityType);
        if (this.props.match.params.entityType !== prevProps.match.params.entityType) {
            this.forceUpdate()
        }
    }

    demoData = [
        {
            _id: 'd101',
            isPublished: true,
            createdAt: Date.now(),
            updatedAt: null,
            userId: 'u101',
            previewImg: '../assets/img/default-preview-img.png',
            childs: [],
        },
        {
            _id: 'd102',
            isPublished: false,
            createdAt: Date.now(),
            updatedAt: null,
            userId: 'u101',
            previewImg: '../assets/img/default-preview-img.png',
            childs: [],
        },
        {
            _id: 'd103',
            isPublished: true,
            createdAt: Date.now(),
            updatedAt: null,
            userId: 'u101',
            previewImg: '../assets/img/default-preview-img.png',
            childs: [],
        }
    ]

    getEntity = () => {
        console.log('getting entities with', this.props.match.params.entityType);
        const isPublished = this.props.match.params.entityType === 'websites' ? true : false;
        return new Promise((resolve, reject) => {
            const entities = this.demoData.filter(website => website.isPublished === isPublished);
            resolve(entities);
        })
    }

    render() {

        const { entities } = this.state;

        return (
            <div className="entity-list">
                {entities ? <div>{JSON.stringify(entities)}</div> : <Loading />}
            </div>
        )
    }
}
