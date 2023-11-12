import PropTypes from "prop-types";
const FormField = ({ label, type, name, placeholder }) => {
    return (
        <div className="mb-5">
            <label htmlFor="email" className="text-[#444] font-semibold ml-1">{label}</label><br />
            <input className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type={type} name={name} id={name} placeholder={placeholder} />
            <br />
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default FormField;