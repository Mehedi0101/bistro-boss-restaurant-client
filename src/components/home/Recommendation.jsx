import HeadingSection from "../shared/HeadingSection";

const Recommendation = () => {
    return (
        <div className="max-w-screen-2xl mx-auto md:mt-20 mt-10">
            <HeadingSection subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></HeadingSection>
            <div className="md:px-10 px-5 grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                <div className="flex flex-col gap-4 items-center text-center justify-center">
                    <div className="">
                        <img className="" src={"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"} alt="" />
                    </div>
                    <div className="px-5 text-[#151515]">
                        <h2 className="text-xl font-semibold">Escalope de Veau</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <div>
                        <button className="px-5 py-2 text-[#BB8506] text-lg font-medium mt-5 mx-auto block border-b-2 border-[#BB8506] rounded hover:bg-[#1F2937] hover:border-[#1F2937] transition-colors">ADD TO CART</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center justify-center">
                    <div className="">
                        <img className="" src={"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"} alt="" />
                    </div>
                    <div className="px-5 text-[#151515]">
                        <h2 className="text-xl font-semibold">Escalope de Veau</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <div>
                        <button className="px-5 py-2 text-[#BB8506] text-lg font-medium mt-5 mx-auto block border-b-2 border-[#BB8506] rounded hover:bg-[#1F2937] hover:border-[#1F2937] transition-colors">ADD TO CART</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center text-center justify-center">
                    <div className="">
                        <img className="" src={"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"} alt="" />
                    </div>
                    <div className="px-5 text-[#151515]">
                        <h2 className="text-xl font-semibold">Escalope de Veau</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    </div>
                    <div>
                        <button className="px-5 py-2 text-[#BB8506] text-lg font-medium mt-5 mx-auto block border-b-2 border-[#BB8506] rounded hover:bg-[#1F2937] hover:border-[#1F2937] transition-colors">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;