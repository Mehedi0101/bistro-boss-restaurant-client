import featuredImage from "../../assets/feature/featured.jpg";

const SpecialItem = () => {
    return (
        <div className="hero min-h-screen md:mt-20 mt-10" style={{ backgroundImage: `url(${featuredImage})` }}>
            <div className="hero-overlay bg-[#151515] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content md:px-10 py-20 px-5">
                <div className="max-w-screen-2xl">
                    <div className="text-center">
                        <h4 className="text-base text-[#D99904] italic mb-2">------Check it out------</h4>
                        <h2 className="border-y-2 border-[#E8E8E8] w-fit mx-auto text-white text-3xl p-4">FROM OUR MENU</h2>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10 mt-10 items-center text-left text-white">
                        <img className="w-full md:w-1/2" src={featuredImage} alt="" />
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl mb-1">March 20, 2023</h2>
                            <h2 className="text-xl mb-2">WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialItem;