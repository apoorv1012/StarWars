import React from 'react'
import Planet from '../common/planet'
import InputSearch from '../common/inputsearch'
import ErrorComponent from '../common/showerror'
import { LOADER_OPTIONS } from '../../constants/constants'
import Loader from 'react-loader'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class Home extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            hasError:false,
            isGuestUser:false
        }
        this.setSearchKey = this.setSearchKey.bind(this)
    }
    componentDidMount() {
        const status = JSON.parse(window.localStorage.getItem('status'))
       
        if(status == "login successfully"){
            const user = JSON.parse(window.localStorage.getItem('username'))
            const isGuestUser  = user ? user.toLowerCase() !== "luke skywalker":""
             this.setState({  isGuestUser:isGuestUser })
        }
        this.props.actions.getDataRequest();
        this.props.actions.clearSearchKey();
    }
   
    setSearchKey(key){
        this.props.actions.setSearchKey(key)
        this.props.actions.getFilteredDataRequest(key)
    }
    render() {
    
            return ( 
                <Loader loaded={ !this.props.isFetching } className='spinner' options={ LOADER_OPTIONS }>
                <PlanetDetails data={this.props} setSearchKey = { this.setSearchKey } isGuestUser =  { this.state.isGuestUser }/>
                </Loader>
       
            )
         
    }
}

const PlanetDetails = (props) =>{
 const  {
            actions, 
            match, 
            errorMessage, 
            isFetching, 
            planets,
            filteredPlanets,
            searchKey,
            totalHits
        } = props.data
       console.log("total hits", totalHits)
        const { setSearchKey, isGuestUser  } = props
        const searchedPlanets = searchKey.length > 0 ? filteredPlanets : planets
return (
    <Loader loaded={!isFetching} className='spinner' options={LOADER_OPTIONS}>
                <div className='component-block'>
                  
                        <InputSearch setSearchKey={ setSearchKey } searchKey={ searchKey } clearSearchKey={ actions.clearSearchKey } totalHits = { totalHits } isGuestUser = { isGuestUser  } />
                    {searchedPlanets && searchedPlanets.length > 0 && (
                        <div className='col-md-12'>
                            
                            {
                                _.map(searchedPlanets, (planet) => (
                                    <Planet key={ planet.name } planet={ planet }/>
                                ))
                            }
                        </div>
                    )
                    }
                      { searchedPlanets && !searchedPlanets.length > 0 && <ErrorComponent className='error'  searchLimitExcedded = { totalHits > 14  && isGuestUser } noDataFound={ !searchedPlanets.length > 0 } />}
                </div>
            </Loader>
)

}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    planets: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
};
