import { useContext } from "react";
import { WishListContext } from "../../context/WishlistContext/WishListContext.context";
import WishListItem from "../WishListItem/WishListItem.component";

function WishList() {
    const {Products}=useContext(WishListContext);
    
    return ( 
        <>
        <div className="container bg-main-light py-5 ">
                <h2 className="my-3">WishList</h2>
                {Products.map(item=>{
                    return <WishListItem key={item._id} product={item}/>
                })}
            </div>
        </>
     );
}

export default WishList;