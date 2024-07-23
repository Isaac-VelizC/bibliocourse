import Cu1 from "assets/images/course/cu-1.jpg";
import Cu2 from "assets/images/course/cu-2.jpg";
import Cu3 from "assets/images/course/cu-3.jpg";
import Cu4 from "assets/images/course/cu-4.jpg";
import Cu5 from "assets/images/course/cu-5.jpg";
import T1 from "assets/images/course/teacher/t-1.jpg";

const CoursesData = [
    {
      id: 1,
      img: Cu1,
      price: 'Free',
      star: 5,
      title: "Learn basis javascirpt from start for beginner",
      teacher: {
        id: 1,
        name: 'Mark anthem',
        avatar: T1
      },
      users: 23,
      heart: 7,
    },
    {
        id: 2,
        img: Cu2,
        price: 'Free',
        star: 5,
        title: "Learn basis javascirpt from start for beginner",
        teacher: {
          id: 1,
          name: 'Mark anthem',
          avatar: T1
        },
        users: 24,
        heart: 10,
      },
      {
        id: 3,
        img: Cu3,
        price: 'Free',
        star: 3,
        title: "Learn basis javascirpt from start for beginner",
        teacher: {
          id: 1,
          name: 'Mark anthem',
          avatar: T1
        },
        users: 30,
        heart: 10,
      },
      {
        id: 4,
        img: Cu4,
        price: 'Free',
        star: 5,
        title: "Learn basis javascirpt from start for beginner",
        teacher: {
          id: 1,
          name: 'Mark anthem',
          avatar: T1
        },
        users: 23,
        heart: 10,
      },
      {
        id: 5,
        img: Cu5,
        price: 'Free',
        star: 4,
        title: "Learn basis javascirpt from start for beginner",
        teacher: {
          id: 1,
          name: 'Mark anthem',
          avatar: T1
        },
        users: 23,
        heart: 10,
      },
  ];

  export default CoursesData;