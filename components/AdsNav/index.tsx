'use client'
import { useState } from 'react';
import ActiveAds from '../ActiveAds';
import ReviewAds from '../ReviewingAds';
import DraftAds from '../DraftAds';
import AllAds from '../AllAds';

const AdNavigation = () => {
  const [activeTab, setActiveTab] = useState('active');

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className='bg-slate-100 rounded-lg border border-gray-200'>
      <div className='flex justify-between mb-[20px] mx-[10px]'>
        <button
          className={`mt-4 ${activeTab === 'active' ? 'py-2 px-4 rounded-md bg-blue-500 text-white' : 'text-gray-700' }`}
          onClick={() => handleTabChange('active')}
        >
          Active
        </button>
        <button
         className={`mt-4 ${activeTab === 'reviewing' ? 'py-2 px-4 rounded-md bg-blue-500 text-white' :  'text-gray-700' }`}
          onClick={() => handleTabChange('reviewing')}
        >
          Reviewing
        </button>
        <button
          className={`mt-4 py-2 px-4 rounded-md ${activeTab === 'drafts' ? 'py-2 px-4 rounded-md bg-blue-500 text-white' : 'text-gray-700' }`}
          onClick={() => handleTabChange('drafts')}
        >
          Drafts
        </button>
        <button
          className={`mt-4 py-2 px-4 rounded-md ${activeTab === 'all' ? 'py-2 px-4 rounded-md bg-blue-500 text-white' : 'text-gray-700' }`}
          onClick={() => handleTabChange('all')}
        >
          All
        </button>
      </div>
      {/* Render content based on activeTab */}
      {activeTab === 'active' && <ActiveAds />}
      {activeTab === 'reviewing' && <ReviewAds />}
      {activeTab === 'drafts' && <DraftAds />}
      {activeTab === 'all' && <AllAds />}
    </div>
  );
};

export default AdNavigation;