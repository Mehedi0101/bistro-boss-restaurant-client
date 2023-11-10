import Proptypes from "prop-types";

const Cover = ({ img, heading, description }) => {
    return (
        <div className="hero min-h-[80vh] bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content max-w-screen-2xl w-full md:px-10 px-5">
                <div className="min-w-full bg-[#15151599] py-12 px-5 md:px-10 mt-10">
                    <h1 className="mb-5 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold cinzel">{heading}</h1>
                    <p className="mb-5 cinzel lg:text-base md:text-sm text-xs font-semibold">{description}</p>
                </div>
            </div>
        </div>
    );
};

Cover.propTypes = {
    img: Proptypes.string.isRequired,
    heading: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
}


export default Cover;