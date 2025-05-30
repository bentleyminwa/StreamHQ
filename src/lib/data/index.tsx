import {
  Clock,
  ClockFading,
  FileVideo,
  House,
  ListVideo,
  SquarePlay,
  ThumbsUp,
} from "lucide-react";

export const sidebarData = {
  general: [
    {
      categoryId: 0,
      label: "Home",
      icon: <House />,
    },
    {
      categoryId: 1,
      label: "Shorts",
      icon: <FileVideo />,
    },
    {
      categoryId: 2,
      label: "Subscriptions",
      icon: <SquarePlay />,
    },
  ],
  you: [
    {
      categoryId: 3,
      label: "History",
      icon: <ClockFading />,
    },
    {
      categoryId: 4,
      label: "Playlists",
      icon: <ListVideo />,
    },
    {
      categoryId: 5,
      label: "Watch Later",
      icon: <Clock />,
    },
    {
      categoryId: 6,
      label: "Liked Videos",
      icon: <ThumbsUp />,
    },
  ],
  subscriptions: [
    {
      categoryId: 7,
      label: "Maggie",
      icon: "images/maggie.jpg",
    },
    {
      categoryId: 8,
      label: "Carol",
      icon: "images/carol.jpg",
    },
    {
      categoryId: 7,
      label: "Rick",
      icon: "images/rick.jpg",
    },
  ],
};

export const feedCategories = [
  {
    categoryId: 0,
    label: "All",
  },
  {
    categoryId: 1,
    label: "Live",
  },
  {
    categoryId: 2,
    label: "Music",
  },
  {
    categoryId: 3,
    label: "Gaming",
  },
  {
    categoryId: 4,
    label: "News",
  },
  {
    categoryId: 5,
    label: "Sports",
  },
  {
    categoryId: 6,
    label: "Learning",
  },
  {
    categoryId: 7,
    label: "Fashion & Beauty",
  },
  {
    categoryId: 8,
    label: "Comedy",
  },
  {
    categoryId: 9,
    label: "Entertainment",
  },
  {
    categoryId: 10,
    label: "People & Blogs",
  },
  {
    categoryId: 11,
    label: "Animals",
  },
];

export const feedVideos = [
  {
    videoId: 0,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
  {
    videoId: 1,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
  {
    videoId: 2,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
  {
    videoId: 3,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
  {
    videoId: 4,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
  {
    videoId: 5,
    title: "How to make a website",
    channel: "Maggie",
    channelImage: "images/maggie.jpg",
    views: "35k",
    timestamp: "1 day ago",
    thumbnail: "images/thumbnail.jpg",
  },
];
