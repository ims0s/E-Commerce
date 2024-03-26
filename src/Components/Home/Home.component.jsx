import CategorySlider from "../CategorySlider/CategorySlider.component";
import MainSlider from "../MainSlider/MainSlider.component";
import Products from "../Products/Products.component";


function Home() {
    return (
        <>
            <MainSlider />
            <CategorySlider />
            <Products/>
        </>
    );
}

export default Home;