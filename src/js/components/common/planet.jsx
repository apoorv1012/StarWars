import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Planet = (props) => {
  
    const {
        rotation_period,
        name,
        population,
        orbital_period,
        diameter
} = props.planet
    return (
        <div className='wrapper'>
            <div className="panel panel-default col-md-12" >
      <div className="panel-heading"><h3><strong>{ name }</strong></h3></div>
      <div className="panel-body">
      <div ><strong>Planet Roation Period:{ rotation_period }</strong></div>
      <div><strong>Population:</strong>{ population }</div>
      
      <div ><strong>Orbital Period:</strong>{ orbital_period }</div>
      <div><strong>Diameter:</strong>{ diameter }</div>

      </div>
    </div>
    
        </div>
    )
}
Planet.propTypes = {
    planet: PropTypes.object.isRequired,
};
export default Planet
