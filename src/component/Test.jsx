import React from 'react'

const About = () => {
  return (
    <div className="md:flex grid place-items-center justify-center min-h-screen px-8 my-44 ">
        <div className='w-2/5 '>
            <div className='my-28 w-auto rounded-xl py-4 bg-[#292b2e] px-4'>
                <img className='w-full h-auto rounded-xl' src='/about.jpg' />
            </div>
        </div>
        <div className="w-3/5 px-4 text-white">
        <h4 className='text-[#FF014F] mb-4 py-6'>About me</h4>
        <h2 className="text-5xl font-bold mb-4">Abhinav Saini</h2>
        <p className="text-lg leading-relaxed mb-4">
        Dr. Laura Jerry brings a wealth of experience and expertise to her practice. With a focus on patient-centered care, she is known for her warm and empathetic approach, always taking the time to listen to her patients’ concerns. Her extensive medical knowledge and dedication to staying at the forefront of the field make her a trusted healthcare partner.
        </p>
        <p className="text-lg leading-relaxed">
        Dr. Laura Jerry brings a wealth of experience and expertise to her practice. With a focus on patient-centered care, she is known for her warm and empathetic approach, always taking the time to listen to her patients’ concerns. Her extensive medical knowledge and dedication to staying at the forefront of the field make her a trusted healthcare partner.
        </p>
      </div>
    </div>
  )
}

export default About