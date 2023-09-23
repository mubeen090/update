jsx
import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";
import powerbi from "../../../../public/assets/courseCard/powerbi.png";
import bigdata from "../../../../public/assets/courseCard/bigdata.png";
import oracle from "../../../../public/assets/courseCard/oracle.png";
import webdevelopment from "../../../../public/assets/courseCard/webdevelopment.png";
import java from "../../../../public/assets/courseCard/java.png";
import python from "../../../../public/assets/courseCard/python.png";
import autocad from "../../../../public/assets/courseCard/autocad.png";
import catia from "../../../../public/assets/courseCard/catia.png";
import ipt from "../../../../public/assets/courseCard/ipt.png";
import robotics from "../../../../public/assets/courseCard/robotics.png";
import { useState } from "react";

const CourseCard = ({ slug }) => {
  const [showMoreCourses, setShowMoreCourses] = useState(false);

  const moreCourses = [
    {
      name: "Power BI",
      image: powerbi,
      lessons: 4,
      students: 100,
      level: "Beginner",
    },
    {
      name: "Big Data",
      image: bigdata,
      lessons: 8,
      students: 200,
      level: "Intermediate",
    },
    {
      name: "Oracle",
      image: oracle,
      lessons: 6,
      students: 180,
      level: "Intermediate",
    },
    {
      name: "Web Development",
      image: webdevelopment,
      lessons: 12,
      students: 300,
      level: "Advanced",
    },
    {
      name: "Java",
      image: java,
      lessons: 10,
      students: 250,
      level: "Advanced",
    },
    {
      name: "Python",
      image: python,
      lessons: 8,
      students: 220,
      level: "Intermediate",
    },
    {
      name: "AutoCAD",
      image: autocad,
      lessons: 6,
      students: 160,
      level: "Beginner",
    },
    {
      name: "CATIA",
      image: catia,
      lessons: 8,
      students: 180,
      level: "Intermediate",
    },
    {
      name: "IPT",
      image: ipt,
      lessons: 4,
      students: 120,
      level: "Beginner",
    },
    {
      name: "Robotics",
      image: robotics,
      lessons: 10,
      students: 280,
      level: "Advanced",
    },
  ];

  return (
    <>
      {showMoreCourses ? (
        <>
          {moreCourses.map((course, index) => (
            <div className={styles.course_card} key={index}>
              <div className={styles.course_image_container}>
                <Image
                  src={course.image}
                  width={340}
                  height={240}
                  className={styles.course_image}
                />
              </div>
              <h1 className={styles.heading}>{course.name}</h1>
              <div className={styles.stats_contianer}>
                <div className={styles.stats}>
                  <Image src={lessons} />
                  Lesson : {course.lessons}
                </div>
                <div className={styles.stats}>
                  <Image src={students} />
                  Student : {course.students}
                </div>
                <div className={styles.stats}>
                  <Image src={level} />
                  {course.level}
                </div>
              </div>
              <div className={styles.btn_rating}>
                <Link href={`/course/${slug}`}>
                  <button className={styles.btn}>Start Now {">"}</button>
                </Link>
                <Image src={rating4} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.explore_button_container}>
          <button
            className={styles.explore_button}
            onClick={() => setShowMoreCourses(true)}
          >
            Explore More Courses
          </button>
        </div>
      )}
    </>
  );
};

export default CourseCard;