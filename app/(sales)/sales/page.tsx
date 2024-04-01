import Header from '@/components/Header'
import PostAds from '@/components/PostAds'
import React from 'react'

function SalesPage() {
  return (
    <main className=" min-h-screen px-24">
      <Header />
      <div>
        <PostAds />
      </div>
    </main>
  )
}

export default SalesPage