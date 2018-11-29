import * as stateActions from '../actions/actions'
import { connect } from 'react-redux'
import SearchComponent from '../components/search/search'
import { bindActionCreators } from 'redux'
import { makeGetVisiblePlanets } from '../reselect/selectors'

const makeMapStateToProps = () => {
      const getVisiblePlanetsState = makeGetVisiblePlanets()
      const mapStateToProps = (state, props) => {
        return {
        planets: state.planets.planets,
        searchKey: state.search.searchKey,
        errorMessage:state.planets.errorMessage,
        isFetching:state.planets.isFetching,
        visiblePlanets:getVisiblePlanetsState(state, props),
        }
  }
 return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(stateActions, dispatch),
    }
}
const SearchContainer =connect(makeMapStateToProps, mapDispatchToProps)(SearchComponent)
export default SearchContainer
