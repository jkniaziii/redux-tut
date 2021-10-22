
import { connect } from 'react-redux';
import Home from '../components/Home';
import {addConter, addToCart, removeConter, removeToCart} from '../Services/Actions/actions'

// const mapStateToProps = state=>{
        
// };
// const mapDispatchToProps=(dispatch)=>({
//     addToCartHandler:(data)=>dispatch(addToCart(data))

    
// });

// export default connect(mapDispatchToProps, mapStateToProps)(Home)

const mapStateToProps=state=>({
         data:state.cardItems,
         conterData : state.conterItem
         
})
const mapDispatchToProps=dispatch=>({
       
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data)),
    addConterHandler : conterData=>dispatch(addConter(conterData)),
    removeConterHandler : conterData=>dispatch(removeConter(conterData))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)