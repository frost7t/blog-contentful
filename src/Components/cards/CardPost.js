import CardMenu from "./CardMenu";

export default function CardPost() {
  return (
    <div className="flex-auto">
      <div className="flex flex-col">
        <div className="relative w-fit">
          <input
            className="block p-3 pl-10 rounded-md border-gray-300 border mb-3 w-80"
            type="text"
            placeholder="Type a Keyword and hit enter"
          />
          <div className="absolute inset-y-0 right-3  bottom-4 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-500"
              
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <CardMenu/>
      </div>
    </div>
  );
}
