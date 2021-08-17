import Image from "next/image"

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:[800px]'>
            <Image src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            layout="fill"
            objectFit='cover'
            />
            <div className='absolute top-20 md:top-1/2 w-full text-center'>
                <div className='w-[200px] md:w-[300px] rounded-tl-3xl rounded-br-3xl  pt-4 mx-auto bg-opacity-20 backdrop-filter backdrop-blur-lg'>
                <p>Not sure where to go? Perfect.</p>
                <button className='bg-white text-purple-500 px-10 py-4 font-bold my-3 shadow-md rounded-full hover:shadow-xl active:scale-105 transition duration-150 ease-out' >You can find here</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;