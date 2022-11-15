import React from 'react'

const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-exl mb-4 font-medium text-white'>
                        Hello, I'm Jared.
                        <br className='hidden lg:inline-block' /> 
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        I am a full stack developer from Wichita, KS! I have a passion for developing web apps and finding new ways to improve my skills at coding. I strive to continue learning as much as I can about coding to be able to better my skills and write clean and efficient code. When I am not coding, I enjoy playing guitar, watching/playing soccer, video games, and traveling the world as much as I can.
                    </p>
                    <div className='flex justify-center'>
                        <a
                            href='#contact'
                            className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                            Work With Me
                        </a>
                        <a
                            href='#projects'
                            className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img
                        className='object-cover object-center rounded'
                        alt='hero'
                        src='./pic.jpg' //placeholder for photo of yourself!
                    />
                </div>
            </div>
        </section>
    )
}

export default About