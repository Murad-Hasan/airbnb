

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='text-lg font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='text-lg font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Murad</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='text-lg font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Say Hi YouTube</p>
                <p>Easter Eggs</p>
                <p>For The Win</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='text-lg font-bold'>HOST</h5>
                <p>Next.js</p>
                <p>Present</p>
                <p>React Developer</p>
                <p>Crazy Learner</p>
                <p>Join with me</p>
            </div>
        </div>
    );
};

export default Footer;