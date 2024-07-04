import React, {useEffect, useState} from "react";
import Photo from "./Photo/Photo";
import Card from "./Card/Card";
import {AnimatePresence, motion, useAnimation} from "framer-motion"

const App: React.FunctionComponent = () => {

  function calculateTimeSinceJuly2022(date: Date): { years: number; months: number } {
    const july2022 = new Date('July 1, 2022');
    const diffInMillis = date.getTime() - july2022.getTime();

    const years = Math.floor(diffInMillis / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diffInMillis % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    return { years, months };
  }

  function calculateTimeSinceOct2019(date: Date): { years: number; months: number } {
    const oct2019 = new Date('October 22, 2019');
    const diffInMillis = date.getTime() - oct2019.getTime();

    const years = Math.floor(diffInMillis / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diffInMillis % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    return { years, months };
  }

  const currentDate = new Date();
  const timeSinceJuly2022 = calculateTimeSinceJuly2022(currentDate);
  const timeSinceOct2019 = calculateTimeSinceOct2019(currentDate);

  const content = [
    {
      title: "E2 (Intermediate) Software Engineer",
      description: "Ocado Technology - Hatfield, UK",
      time: `Jul 2022 - Present · ${timeSinceJuly2022.years} Years ${timeSinceJuly2022.months} Months `,
      fromColor: 'from-red-400',
      toColor: 'to-blue-600'
    },
    {
      title: "Full-Stack Software Engineer",
      description: "RCRaceControl - Ware, UK",
      time: `Oct 2019  - Present · ${timeSinceOct2019.years} Years ${timeSinceOct2019.months} Months `,
      fromColor: 'from-indigo-500',
      toColor: 'to-red-600'
    },
    {
      title: "Full-Stack Software Engineer",
      description: "HertsRCModels - Ware, UK",
      time: "Dec 2019 - Feb 2022 · 2 Years 3 Months",
      fromColor: 'from-blue-200',
      toColor: 'to-orange-600'
    },
  ]

  const items = [
    'Vite',
    'React',
    'NestJS',
    'JavaScript',
    'TypeScript',
    'Vercel',
    'AWS'
  ];


  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start(i => ({
      backgroundColor: i === index ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
      transition: { duration: 0.3 },
    }));
  }, [index, controls]);


  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.25}}

      className="w-full h-full bg-[#16181D] text-[#C7D2FE]/30 flex flex-col items-center lg:py-24">
      <div className="absolute top-0 -left-5">
        <img className="w-40" src="./arrow.png" alt="arrow"/>
      </div>
      <div className="max-w-[130rem]">
        <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
          className="flex flex-col p-12 lg:p-24">
          <p className="text-xl lg:text-5xl">I'm <span className="text-white/30">Marques</span>.</p>
          <div className="mt-8">
            <p className="font-medium text-6xl lg:text-[8.5rem] leading-[1] relative">
              A <span className="relative z-5">
                  <span className="text-[#3B82F6] relative z-20">Software Engineer</span>
                  <span className="absolute left-0 bottom-1 w-full h-4 lg:h-20 bg-[#182034] z-0"></span>
                </span>
              {' '}from the UK.
            </p>
          </div>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 1}}
            className="flex flex-row gap-2 pt-4 flex-wrap">
            {items.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                animate={controls}
                initial={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                className="w-fit h-fit px-2 lg:py-1 text-[#16181D] text-sm lg:text-md rounded font-semibold"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
          <a href="/cv.pdf" className="w-fit h-fit px-2 lg:py-1 text-white hover:opacity-50 duration-300 text-lg rounded bg-white/10 border border-white/10 mt-8">
            Resume
          </a>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1.5}}
          className="flex w-full relative h-auto flex-col lg:flex-row justify-between gap-24 items-start lg:pt-24">
          <div
            className="relative flex flex-row w-full lg:w-fit h-full justify-center lg:justify-start lg:pl-48 items-start">
            <div
              className="w-52 lg:w-96 z-10 h-[15rem] lg:h-[30rem] bg-[#EAEEFF] rounded drop-shadow-2xl rotate-[5deg] hover:-translate-y-1.5 duration-300 flex justify-center p-4">
              <div className="w-8 h-8 rounded-full absolute -top-3 -right-3 border-4 border-dotted"/>
              <div className="w-8 h-8 rounded-full absolute -bottom-3 -left-3 border-4 border-dotted"/>
              <div className="w-52 lg:w-96 h-40 lg:h-80 bg-white rounded">
                <img src="./photo-1.jpg" alt="photo-1" className="w-full h-full object-cover rounded"/>
              </div>
            </div>
            <div
              className="w-52 lg:w-96 absolute h-[15rem] lg:h-[30rem] bg-[#EAEEFF] rounded shadow-[#C7D2FE] rotate-[-5deg] hover:-translate-y-1.5 duration-300 flex justify-center p-4">
              <div className="w-52 lg:w-96 h-40 lg:h-80 bg-white rounded">
                <img src="./photo-2.jpg" alt="photo-1" className="w-full h-full object-cover rounded"/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 p-12 w-full lg:w-fit max-w-7xl">
            <p className="lg:text-4xl text-2xl">Born in Letchworth, UK. I’ve spent the last 4+ years working with
              various companies
              on creating <span className="text-[#3B82F6]">branding, websites and apps.</span></p>
            <p className="lg:text-4xl text-2xl">Here, I share through my writing experiences, thoughts and ideas as a
              Software
              Engineer and everything I’m currently learning.</p>
          </div>
        </motion.div>
        <div className="text-center flex flex-col items-center justify-center pt-48 gap-16">
          <p className="text-xs opacity-80 uppercase underline decoration-dotted">Companies I've worked with</p>
          <div className="w-full h-auto items-center justify-center flex flex-col lg:flex-row gap-24">
            <img className="h-20 w-auto" src="./ocado.png" alt="ocado"/>
            <img className="h-20 w-auto" src="./race.png" alt="race"/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-32 gap-16">
          <p className="text-xs opacity-80 uppercase underline decoration-dotted">Experience</p>
          <div className="w-full h-auto items-center justify-center flex flex-col gap-8 lg:px-0 px-4">
            {content.map((item, index) => (
              <Card time={item.time} toColor={item.toColor} fromColor={item.fromColor}
                    title={item.title} description={item.description}/>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default App;
