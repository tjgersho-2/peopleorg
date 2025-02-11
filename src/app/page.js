'use client'

import PeopleOrg from "../components/PeopleOrg"

export default function Home() {
    return (
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold mb-6">Welcome to People Org</h1>
            <PeopleOrg />
      </div>
    )
  }