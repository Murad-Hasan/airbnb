import Head from 'next/head'
import Banner from '../components/Banner';
import Header from "../components/Header";
import SmallCard from '../components/SmallCard';

export default function Home({exportedData}) {
    return (
        <div>
            <Head>
                <title>Airbnb</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Banner/>
            <main className='max-w-7xl mx-auto px-8 sm:x-16'> 
                {/* Explore Nearby */}
                <section className='pt-6'>
                    <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
                    {/* Fetch Some Data from API */}
                   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'>
                    {exportedData.map (({img, location, distance})=> (
                            <SmallCard 
                            key={img} 
                            img={img} 
                            location={location} 
                            distance={distance}
                            />
                        ))}
                   </div>
                </section>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const exportedData = await fetch('https://jsonkeeper.com/b/SXCL?fbclid=IwAR28JMT0vNnP9UKfZVs0J1PLctgbQRsc-batLm24_apv0R_IqZkCd7osHjk')
    .then(res => res.json())
    return {
        props: {
            exportedData
        },
    };
}