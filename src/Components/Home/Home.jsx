import Banner from "../Banner/Banner";
import ShowCards from "../ShowCards/ShowCards";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:w-[1300px] mx-auto">
            <ShowCards></ShowCards>
            </div>
        </div>
    );
};

export default Home;