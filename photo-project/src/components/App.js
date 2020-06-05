import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
 

function mapStoreToProps (state){
    return {
        allPhotos  : state.allPhotos,
        comments : state.comments
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actions, dispatch)
     
}
 
const App =  connect(mapStoreToProps, mapDispatchToProps)(Main)

export default App 