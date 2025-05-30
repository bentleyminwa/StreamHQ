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
