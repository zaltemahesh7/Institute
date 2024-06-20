import React from 'react'
import nurse from '/images/Hero.webp';
import Card from './Card';
import StudentCard from './StudentCard';
import ServiceSuitCards from './ServiceSuitCards';

function Home() {

    let partners = [
        "images/partners/King_s-College-London.webp",
        "images/partners/Arizona-State-University.webp",
        "images/partners/McGill-University.webp",
        "images/partners/queen.webp",
        "images/partners/Queen-Mary-University-London.webp",
        "images/partners/Trinity-College-Dublin.webp",
        "images/partners/University-College-Dublin.webp",
        "images/partners/University-of-Bristol.webp",
        "images/partners/University-of-Edinburgh.webp",
        "images/partners/University-of-Leeds.webp",
        "images/partners/University-of-Manchester.webp",
        "images/partners/University-of-Manitoba.webp",
        "images/partners/University-of-Waterloo.webp",
        "images/partners/victoria.webp",
        "images/partners/warwick.webp"
    ];
    return (
        <>
            <section className=' grid md:grid-cols-2 justify-between text-white mt-1 md:py-12 md:px-28 md:p-1' style={styles.style} >
                <div className=''>
                    <h1 className=' text-7xl py-5 font-bold'>Lorem ipsum dolor sit, amet consectetur</h1>
                    <p className='py-5 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab possimus id libero.</p>
                    <button className=' bg-[#a2e03a] py-5 px-12 font-bold rounded-full text-2xl text-[#7633fc]'> Get Started!</button>
                </div>
                <div className=' p-5'>
                    <img className=' m-auto h-[26rem]' src={nurse} alt="Nurse" />
                </div>
                <div className=' col-span-2 md:p-6'>
                    <div className=' md:flex '>
                        <Card img='/images/card/100.webp' title='100% Reliable' />
                        <Card img='/images/card/free.webp' title='Team of experts' />
                        <Card img='/images/card/edu.webp' title='Accessible anywhere' />
                    </div>
                </div>
                <div className=' text-2xl text-center col-span-2'>
                    Your journey to studying abroad begins with us. From selecting the best country for you to getting you settled there, we promise to be there every step of the way!
                </div>
            </section>

            <section className='md:px-28'>
                <div className=' md:py-12 px-2 text-center'>
                    <h2 className='text-5xl'>Over <span className=' text-[#7633fc]'>900+ Global Partners</span> across the world to assist you with</h2>
                    <p className=' py-3 text-2xl'>Having one option is not an option. EazyGrad helps you explore the world of foreign education opportunities to choose the one which is perfect for you!</p>
                </div>
                <div className=' grid md:grid-cols-5'>
                    {partners.map((item, index) =>
                        <img key={index} className=' p-4' src={item} alt="Partners image" />
                    )}
                </div>
            </section>

            <section className='md:px-28 pt-10 bg-[#7633fc] text-center text-white'>
                <div>
                    <h2 className=' text-5xl'>Our <span className=' text-[#a2e03a]'>Exclusive</span> Features</h2>
                    <p>Here is what makes EazyGrad your best option!</p>
                </div>
                <div className=' grid md:grid-cols-4'>
                    <Card img='/images/card/100.webp' title='100% Visa success' />
                    <Card img='/images/card/free.webp' title='Exclusive application fee waivers' />
                    <Card img='/images/card/edu.webp' title='3 out of 5 students receive scholarships' />
                    <Card img='/images/card/360.webp' title='360° Profile building' />
                </div>

            </section>

            <section className='px-28'>
                <div className=''>
                    <div className='flex flex-col items-center'>
                        <h2 className=' text-5xl text-[#7633fc]'>100+ students trusted us</h2>
                        <h2 className='text-5xl'>for writing their success story</h2>
                    </div>
                </div>

                <div className='md:p-6 grid md:grid-cols-3 md:py-10 gap-10'>
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </div>
                <p className='flex justify-center m-9 items-center text-5xl'>Full stack <span className='text-[#7633fc]'>service</span> suite</p>
                <div className='px-2 md:grid grid-cols-5 gap-3'>
                    <ServiceSuitCards />
                    <ServiceSuitCards />
                    <ServiceSuitCards />
                    <ServiceSuitCards />
                    <ServiceSuitCards />
                </div>
                <div className='flex justify-center items-center px-6 py-8'>
                    <button className='border px-6 py-4 rounded-full bg-[#7633fc] text-white text-2xl' >BOOK YOUR FREE CALL</button>
                </div>
                <div>
                    <div className='flex justify-center items-center text-5xl p-5'>
                        <h2>Choose your <span className='text-[#7633fc]'>dream study destination</span></h2>
                    </div>
                </div>
            </section>

            <section className='px-28'>

            </section>
        </>
    )
}

export default Home

const styles = {
    style: {
        backgroundColor: '#7633fc',
        // backgroundImage: 'linear-gradient(160deg, #7633fc 0%, #80D0C7 100%)',

    },
}