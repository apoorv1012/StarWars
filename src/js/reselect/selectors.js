import { createSelector } from 'reselect'
import _ from 'lodash'

// selector
const getPlanets = (state) => state.planets.planets
const getSearchTerm = (state, props) => props.match.params.id && props.match.params.id.toLowerCase()


export const makeGetVisiblePlanets = () => createSelector(
  [getPlanets, getSearchTerm],
  (planets, searchTerm) => _.filter(planets, (planet) => (planet.name.toLowerCase().includes(searchTerm)))
)
