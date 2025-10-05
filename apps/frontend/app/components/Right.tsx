// components/Right.tsx
import React from 'react';

const trendingTopics = [
  { topic: 'ReactJS', Takes: '120K Takes' },
  { topic: 'TailwindCSS', Takes: '80K Takes' },
  { topic: 'Opiniom', Takes: '50K Takes' },
];

const whoToFollow = [
  { name: 'Gokul', username: 'gokul', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Charlie', username: 'charlie', avatar: 'https://i.pravatar.cc/40?img=3' },
];

const Right = () => {
  return (
    <div className="w-80 p-4 hidden lg:flex flex-col gap-6">
      {/* Search Bar */}
      <div className="sticky top-2 bg-black p-2 rounded-full border border-gray-300 mb-4">
        <input
          type="text"
          placeholder="Search Opiniom"
          className="w-full px-2  rounded-full focus:outline-none"
        />
      </div>

      {/* Trending Topics */}
      <div className="bg-black rounded-xl p-4">
        <h3 className="font-bold text-lg mb-3">Trending Opiniom</h3>
        <ul>
          {trendingTopics.map((item, idx) => (
            <li key={idx} className="py-2 hover:scale-105 px-2 rounded cursor-pointer transition-all">
              <span className="text-gray-500 text-sm ">Trending</span>
              <p className="font-medium">{item.topic}</p>
              <span className="text-gray-500 text-sm ">{item.Takes}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Who to follow */}
      <div className="bg-black rounded-xl p-4">
        <h3 className="font-bold text-lg mb-3">Who to follow</h3>
        <ul>
          {whoToFollow.map((user, idx) => (
            <li key={idx} className="flex items-center justify-between py-2 hover:scale-105 px-2 rounded cursor-pointer transition-all">
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-gray-500 text-sm">@{user.username}</span>
                </div>
              </div>
              <button className="text-blue-500 font-medium text-sm hover:underline">Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
