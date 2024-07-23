import B1 from "assets/images/blog/b-1.jpg";
import B2 from "assets/images/blog/b-2.jpg";
import Bp1 from "assets/images/blog/blog-post/bp-1.jpg";
import Bp2 from "assets/images/blog/blog-post/bp-2.jpg";

const PostsData = [
    {
      id: 1,
      img: Bp1,
      title: "Introduction to languages",
      date: "25 Dec 2018",
      tags: "Education",
      user: "Mark anthem",
    },
    {
    id: 2,
    img: Bp2,
    title: "How to build a game with java",
    date: "07 Dec 2018",
    tags: "Education",
    user: "Mark anthem",
    },
    {
    id: 3,
    img: Bp1,
    title: "Basic accounting from primary",
    date: "07 Dec 2018",
    tags: "Education",
    user: "Mark anthem",
    }
  ];

  const PostsDataNew = [
    {
      id: 1,
      img: B1,
      title: "Introduction to languages",
      date: "25 Dec 2018",
      tags: "Education",
      user: "Mark anthem",
    },
    {
    id: 2,
    img: B2,
    title: "How to build a game with java",
    date: "07 Dec 2018",
    tags: "Education",
    user: "Mark anthem",
    }
  ];

  export default { PostsData, PostsDataNew};