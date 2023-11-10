import Proptypes from "prop-types";

const HeadingSection = ({ subHeading, heading }) => {
    return (
        <div className="text-center">
            <h4 className="text-base text-[#D99904] italic mb-2">---{subHeading}---</h4>
            <h2 className="border-y-2 border-[#E8E8E8] w-fit mx-auto text-[#151515] text-3xl p-4">{heading}</h2>
        </div>
    );
};

HeadingSection.propTypes = {
    subHeading: Proptypes.string,
    heading: Proptypes.string
}

export default HeadingSection;

