export default function CardAvatar({ title, subtitle, description, url_img }) {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg  flex">
        <div className="flex flex-col justify-between px-3 py-4">
          <p className="text-gray-600 text-sm mb-1">{description}</p>
          <div className="flex gap-2 items-center">
            <div className="h-14 w-14 rounded-full overflow-hidden ">
              <img
                className="object-cover h-full w-full"
                src={url_img}
                alt={title}
              />
            </div>
            <div>
              <p className="font-bold text-xl mb-1 ">{title}</p>
              <p className="text-yellow-400 font-bold text-sm">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
