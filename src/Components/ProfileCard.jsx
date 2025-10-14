
export default function ProfileCard({
  name = "NAME",
  designation = "DESIGNATION",
  status = "inactive",
}) {
  const isActive = status === "active"

  return (
    <div
      className={["card", isActive ? "border-3 border-black  " : "border-gray-300 "].join(" ")}
    >

      <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden bg-gray-50 flex items-center justify-center">
         <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
            <path d="M4 20c1.7-3 5-5 8-5s6.3 2 8 5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
      </div>
      <span
        className={[
          "status-pill",
          isActive
            ? "bg-green-100 text-black border-2 border-black/95 "
            : "bg-gray-100 text-gray-600 border-1 border-gray-300/50", ].join(" ")}
      >
        <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          {isActive ? <circle cx="10" cy="10" r="4" /> : <circle cx="10" cy="10" r="4" />}
        </svg>
        {isActive ? "Active" : "Inactive"}
      </span>
      <div className="text-center">
        <p className="text-lg font-semibold tracking-wide ">{name}</p>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>
    <div className={["symbols", isActive ? " text-green-800 bg-green-200  " : " text-red-600  bg-red-200 "].join(" ")}>
        {isActive ? (
          <svg
            aria-hidden="true"
            className="w-7 h-7 text-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M6 12l4 4 8-8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"  />
          </svg>
        ) : (
          <svg aria-hidden="true" className="w-7 h-7 text-danger " viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 6l12 12M18 6L6 18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <button
        className={[
          "round-button",
          isActive ?"bg-success text-white bg-green-700 cursor-pointer hover:shadow-green-300 shadow-lg hover:scale-110 " 
          :"bg-gray-200 text-gray-500 cursor-not-allowed", ].join(" ")}
        disabled={!isActive}
        aria-disabled={!isActive}
      >
        Click Here
      </button>
    </div>
  )
}

