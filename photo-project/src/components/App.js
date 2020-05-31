import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removePhoto} from '../redux/actions'

function mapStoreToProps (state){
    return {
        allPhotos  : state
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({removePhoto}, dispatch)
     
}
 
const App = connect(mapStoreToProps, mapDispatchToProps)(Main)

export default App 