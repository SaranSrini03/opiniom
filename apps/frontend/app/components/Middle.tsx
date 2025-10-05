// components/Middle.tsx
import React, { useState } from 'react';
import { 
  HiOutlinePhotograph, 
  HiOutlineChartBar, 
  HiOutlineEmojiHappy,
  HiOutlineCalendar,
  HiOutlineLocationMarker
} from 'react-icons/hi';
import { 
  RiChat3Line, 
  RiHeartLine,
  RiHeartFill,
  RiBarChartLine,
  RiRepeatLine,
  RiRepeatFill
} from 'react-icons/ri';
import { IoMdShareAlt } from 'react-icons/io';

interface Post {
  id: number;
  username: string;
  handle: string;
  content: string;
  avatar: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  timestamp: string;
  isLiked: boolean;
  isRetweeted: boolean;
  media?: string;
}

const samplePosts: Post[] = [
  { 
    id: 1, 
    username: 'Saran', 
    handle: 'saran', 
    content: 'Hello, this is my first post! Excited to join this platform. 🚀', 
    avatar: 'https://i.pravatar.cc/40?img=1', 
    likes: 24,
    retweets: 5,
    replies: 3,
    views: 1200,
    timestamp: '2h',
    isLiked: false,
    isRetweeted: false,
    media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop'
  },
  { 
    id: 2, 
    username: 'Gokul', 
    handle: 'gokul', 
    content: 'Just sharing something interesting! The future of web development looks bright with all these new technologies.', 
    avatar: 'https://i.pravatar.cc/40?img=2', 
    likes: 42,
    retweets: 12,
    replies: 7,
    views: 2500,
    timestamp: '4h',
    isLiked: true,
    isRetweeted: false
  },
  { 
    id: 3, 
    username: 'Charlie', 
    handle: 'charlie_dev', 
    content: 'React + Tailwind is awesome! Building beautiful UIs has never been easier. What\'s your favorite stack?', 
    avatar: 'https://i.pravatar.cc/40?img=3', 
    likes: 156,
    retweets: 34,
    replies: 28,
    views: 8900,
    timestamp: '1d',
    isLiked: false,
    isRetweeted: true
  },
];

const Middle = () => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [newPost, setNewPost] = useState('');

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked
          }
        : post
    ));
  };

  const handleRetweet = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            retweets: post.isRetweeted ? post.retweets - 1 : post.retweets + 1,
            isRetweeted: !post.isRetweeted
          }
        : post
    ));
  };

  const handleReply = (postId: number) => {
    // Handle reply functionality
    console.log('Replying to post:', postId);
  };

  const handlePost = () => {
    if (!newPost.trim()) return;

    const newPostObj: Post = {
      id: posts.length + 1,
      username: 'You',
      handle: 'yourhandle',
      content: newPost,
      avatar: 'https://i.pravatar.cc/40',
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
      timestamp: 'now',
      isLiked: false,
      isRetweeted: false
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex-1 max-w-2xl mx-auto min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 border-b border-gray-800">
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold">Home</h2>
        </div>
        
        {/* Feed Type Selector */}
        <div className="flex">
          <button className="flex-1 py-4 font-semibold text-center border-b-2 border-black hover:bg-gray-800 transition-colors">
            For you
          </button>
          <button className="flex-1 py-4 font-semibold text-center text-gray-500 border-b-2 border-transparent hover:bg-gray-800 transition-colors">
            Following
          </button>
        </div>
      </div>

      {/* Create Post */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex gap-3">
          <img 
            src="https://i.pravatar.cc/40" 
            alt="avatar" 
            className="w-12 h-12     rounded-full flex-shrink-0" 
          />
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What is happening?!"
              className="w-full text-xl placeholder-gray-500 border-none resize-none focus:outline-none focus:ring-0 min-h-[5px]"
              rows={3}
            />
            <div className="flex items-center justify-between pt-3">
              <div className="flex gap-2 text-blue-500">
                <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <HiOutlinePhotograph className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <HiOutlineChartBar className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <HiOutlineEmojiHappy className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <HiOutlineCalendar className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <HiOutlineLocationMarker className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handlePost}
                disabled={!newPost.trim()}
                className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div>
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="p-4 border-b border-gray-800 hover:bg-gray-950 transition-colors cursor-pointer"
          >
            <div className="flex gap-3">
              <img 
                src={post.avatar} 
                alt={post.username} 
                className="w-12 h-12 rounded-full flex-shrink-0" 
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white">{post.username}</span>
                  <span className="text-gray-500">@{post.handle}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">{post.timestamp}</span>
                </div>
                <p className="mt-1 text-white whitespace-pre-wrap">{post.content}</p>
                
                {/* Media */}
                {post.media && (
                  <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
                    <img 
                      src={post.media} 
                      alt="Post media" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                {/* Engagement Metrics */}
                <div className="flex justify-between max-w-md mt-3 text-gray-500">
                  {/* Reply Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReply(post.id);
                    }}
                    className="flex items-center gap-1 group hover:text-blue-500 transition-colors"
                  >
                    <div className="p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                      <RiChat3Line className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{formatNumber(post.replies)}</span>
                  </button>

                  {/* Retweet Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRetweet(post.id);
                    }}
                    className={`flex items-center gap-1 group hover:text-green-500 transition-colors ${
                      post.isRetweeted ? 'text-green-500' : ''
                    }`}
                  >
                    <div className="p-2 rounded-full group-hover:bg-green-100 transition-colors">
                      {post.isRetweeted ? (
                        <RiRepeatFill className="w-5 h-5" />
                      ) : (
                        <RiRepeatLine className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-sm">{formatNumber(post.retweets)}</span>
                  </button>

                  {/* Like Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(post.id);
                    }}
                    className={`flex items-center gap-1 group hover:text-red-500 transition-colors ${
                      post.isLiked ? 'text-red-500' : ''
                    }`}
                  >
                    <div className="p-2 rounded-full group-hover:bg-red-100 transition-colors">
                      {post.isLiked ? (
                        <RiHeartFill className="w-5 h-5" />
                      ) : (
                        <RiHeartLine className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-sm">{formatNumber(post.likes)}</span>
                  </button>

                  {/* Views Button */}
                  <button className="flex items-center gap-1 group hover:text-blue-500 transition-colors">
                    <div className="p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                      <RiBarChartLine className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{formatNumber(post.views)}</span>
                  </button>

                  {/* Share Button */}
                  <button className="p-2 rounded-full hover:bg-blue-100 group transition-colors">
                    <IoMdShareAlt className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;