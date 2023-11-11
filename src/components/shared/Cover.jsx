import Proptypes from "prop-types";

const Cover = ({ img, heading, description, type }) => {
    return (
        <div className={`hero ${type === "pageCover" ? "min-h-[80vh]" : "min-h-[70vh]"} bg-fixed`} style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className={`hero-content text-center text-neutral-content w-full ${type === "pageCover" ? "md:px-20 px-5 max-w-screen-2xl mt-10" : "md:px-40 px-5 max-w-screen-xl"}`}>
                <div className="min-w-full bg-[#15151599] py-12 px-5 md:px-10">
                    <h1 className={`${type === "pageCover" ? "xl:text-5xl lg:text-4xl md:text-3xl text-2xl" : "xl:text-4xl lg:text-3xl md:text-2xl text-xl"} mb-5  font-bold cinzel`}>{heading}</h1>
                    <p className={`mb-5 ${type === "pageCover" ? "cinzel lg:text-base md:text-sm" : "lg:text-sm"}  text-xs font-semibold`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

Cover.propTypes = {
    img: Proptypes.string.isRequired,
    heading: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired
}


export default Cover;