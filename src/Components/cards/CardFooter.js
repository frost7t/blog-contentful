import React from "react";

export default function CardFooter({
  title,
  subtitle,
  twitterIcon,
  facebookIcon,
  spanText,
  spanClass,
  pointColor,
}) {
  return (
    <div className="h-full">
      <div>
        <h1 className="text-white text-2xl font-black pb-10">
          {title}
          {/*condition ternaire texte spécifié dans la props spanText. Si la prop est vide ou non définie, l'élément <span>  */}
          {spanText && <span className={spanClass}>{spanText}</span>}
          <span style={{ color: pointColor }}>.</span>
        </h1>
        <p className="text-gray-300 text-xs font-light">{subtitle}</p>
      </div>
      {/* icons */}
      <div className="flex items-center pt-12">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-2">
          {twitterIcon}
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          {facebookIcon}
        </div>
      </div>
    </div>
  );
}
