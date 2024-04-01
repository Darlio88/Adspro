import CreateAds from '@/components/CreateAds'
import Header from '@/components/Header'
import React from 'react'

function CreatePage() {
  return (
    <main className=" min-h-screen px-24">
      <Header />
      <div>
        <CreateAds />
      </div>
    </main>
  )
}

export default CreatePage