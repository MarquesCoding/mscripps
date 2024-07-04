import React from "react";

interface CardProps {
  title: string;
  description: string;
  time: string;
  fromColor: string;
  toColor: string;
}

const Card: React.FunctionComponent<CardProps> = ({title, description, time, fromColor, toColor}) => {
  return (
    <div className="w-full lg:w-1/2 h-auto px-8 py-8 border border-black/10 dark:border-white/20 rounded-lg bg-gray-500/5 duration-300 hover:shadow-2xl hover:shadow-blue-500">
      <h2 className={`font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r ${fromColor} ${toColor}`}>{title}</h2>
      <p className="text-gray-400 text-lg">{description}</p>
      <p className="text-md text-black/20 dark:text-white/20 italic">{time}</p>
    </div>


  )
}
export default Card;
