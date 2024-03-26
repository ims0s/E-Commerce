import CategorySlider from "../CategorySlider/CategorySlider.component";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.component";
import MainSlider from "../MainSlider/MainSlider.component";


function Home() {
    return (
        <>
            <MainSlider />
            <CategorySlider />
            <FeaturedProducts />
        </>
    );
}

export default Home;