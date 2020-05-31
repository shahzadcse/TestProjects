import Main from './Main'
import {connect} from 'react-redux'

function mapStoreToProps (state){
    return {
        allPhotos  : state
    }
}
 
const App = connect(mapStoreToProps)(Main)

export default App