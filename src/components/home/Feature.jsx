import featureBg from "../../assets/feature/chef-service.jpg";

const Feature = () => {

    return (
        <div className="max-w-screen-2xl mx-auto min-h-[70vh] flex items-center md:mt-20 mt-10">
            <div className="mx-5 md:mx-10 py-10 lg:p-10 xl:p-16 bg-fixed" style={{ backgroundImage: `url(${featureBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="bg-white min-h-[50vh] flex justify-center items-center flex-col text-center p-5 md:px-20 lg:px-40 xl:px-60 mx-5 md:mx-20">
                    <h2 className="text-[#151515] text-3xl md:text-4xl cinzel mb-2">Bistro Boss</h2>
                    <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;