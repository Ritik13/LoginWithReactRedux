import React from 'react'
import { log_in_action } from '../actions'
import { connect } from 'react-redux'

function SignIN({loggUserIn , isLoggedIN}) {
    return (
        <div>
             <button onClick={loggUserIn}>{(isLoggedIN) ? "Logged In" : "Logged Out"}</button>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    loggUserIn: () => dispatch(log_in_action())
  });
  
  const mapStateToProps = (state) => {
    return {
      isLoggedIN : state.isLoggedIN
    }
  
  }


export default connect(mapStateToProps , mapDispatchToProps)(SignIN)
