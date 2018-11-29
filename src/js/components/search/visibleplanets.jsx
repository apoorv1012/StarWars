import React from 'react'
import Planet from '../common/planet'
import PropTypes from 'prop-types'
import ErrorComponent from '../common/showerror'
import _ from 'lodash'

const VisiblePlanets = (props) => {
   
    let noData = props.params.id ? (!(props.queryParam.trim().length>0)  || !(props.visiblePlanets.length > 0)) :false
    return (
        <div>
            {props.visiblePlanets.length > 0 ?
                _.map(props.visiblePlanets, (planet) => (
                    <Planet key={planet.name} planet={planet} />
                )) :
                (<ErrorComponent noDataFound={noData} />)}
        </div>
    )

}

VisiblePlanets.propTypes = {
    visiblePlanets: PropTypes.array.isRequired,
    queryParam: PropTypes.string.isRequired,
    params:PropTypes.object
};
export default VisiblePlanets
