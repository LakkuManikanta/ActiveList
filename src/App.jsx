

import { useMemo, useState } from "react"
import ProfileCard from "./Components/ProfileCard"

export default function App() {
  const [allInactive, setAllInactive] = useState(false)

  const profiles = useMemo(
    () => [
      {
        name: "Person1",
        designation: "Software Developer",
        status: "inactive",
      },
      {
        name: "Person2",
        designation: "Python Developer",
        status: allInactive ? "inactive" : "active",
      },
      {
        name: "Person3",
        designation: "Web Developer",
        status: "inactive",
       
      },
    ],
    [allInactive],
  )

  return (
    <main className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <label className="inline-flex items-center gap-3 mb-6">
          <input
            id="all-inactive"
            type="checkbox"
            className="h-4 w-4 accent-black"
            checked={allInactive}
            onChange={(e) => setAllInactive(e.target.checked)}
            aria-checked={allInactive}
          />
          <span className="text-sm font-medium">MARK ALL INACTIVE</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, idx) => (
            <ProfileCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </main>
  )
}
