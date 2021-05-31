import { Loading } from '../Loading'
import { EntityPreview } from './EntityPreview';

export function EntityList({ entitiesType, entities }) {

    return (
        <div className="entity-container">
            {entities ?
                <>
                    <div className="list-header">{entitiesType}</div>
                    <div className="grid entity-list">
                        {entities.map(entity => <EntityPreview entity={entity} key={entity._id} />)}
                    </div>
                </>
                :
                <Loading />}
        </div>
    )
}
