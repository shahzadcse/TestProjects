import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStoreToProps (state){
    return {
        allPhotos  : state
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actions, dispatch)
     
}
 
const App = withRouter(connect(mapStoreToProps, mapDispatchToProps)(Main))

export default App 