import React from 'react'
import PropTypes from 'prop-types'
import { DATA_FOUND, TRY_AGAIN, PREFERENCE_FOUND, WRONG_CREDENTIALS, SEARCH_LIMIT_EXCEEDED } from '../../constants/constants'
const ErrorComponent = (props) => {
    if(props.searchLimitExcedded){
        return  (
            <div className='alert alert-danger'>
                <strong>{ SEARCH_LIMIT_EXCEEDED }</strong>
            </div>
        )
    }
    if(props.noDataFound){
        return  (
            <div className='alert alert-info'>
                <strong>{ DATA_FOUND }</strong>
            </div>
        )
    }
    else if(props.wrongCredentials){
        return  (
            <div className='alert alert-danger'>
                <strong>{ WRONG_CREDENTIALS }</strong>
            </div>
        )
    }
    else if(props.noPreferenceFound){
        return  (
            <div className='alert alert-info'>
                <strong>{ PREFERENCE_FOUND }</strong>
            </div>
        )
    }
   else if(props.dataNotFetched)
        return (
            <div className='alert alert-danger'>
                <strong>{ props.errorMessage }! {TRY_AGAIN}</strong>
            </div>
        )
    return null
}
ErrorComponent.propTypes = {
    dataNotFetched: PropTypes.bool,
    noDataFound: PropTypes.bool,
    errorMessage: PropTypes.string,
};
export default ErrorComponent
