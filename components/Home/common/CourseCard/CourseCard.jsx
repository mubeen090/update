jsx
import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import ai from "../../../../public/assets/courseCard/ai.png";
import ml from "../../../../public/assets/courseCard/ml.png";
import ds from "../../../../public/assets/courseCard/ds.png";
import webdevelopment from "../../../../public/assets/courseCard/webdevelopment.png";
import bigdata from "../../../../public/assets/courseCard/bigdata.png";
import oracle from "../../../../public/assets/courseCard/oracle.png";
import sap from "../../../../public/assets/courseCard/sap.png";
import digitalmarketing from "../../../../public/assets/courseCard/digitalmarketing.png";
import django from "../../../../public/assets/courseCard/django.png";
import java from "../../../../public/assets/courseCard/java.png";
import python from "../../../../public/assets/courseCard/python.png";
import powerbi from "../../../../public/assets/courseCard/powerbi.png";
import apitesting from "../../../../public/assets/courseCard/apitesting.png";
import tally from "../../../../public/assets/courseCard/tally.png";
import aws from "../../../../public/assets/courseCard/aws.png";
import devops from "../../../../public/assets/courseCard/devops.png";
import { useState } from "react";

const CourseCard = ({ slug }) => {
  const [showMoreCourses, setShowMoreCourses] = useState(false);
  const moreCourses = [
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
      name: "SAP",
      image: sap,
      lessons: 10,
      students: 250,
      level: "Advanced",
    },
    {
      name: "Digital Marketing",
      image: digitalmarketing,
      lessons: 12,
      students: 300,
      level: "Advanced",
    },
    {
      name: "Django",
      image: django,
      lessons: 8,
      students: 220,
      level: "Intermediate",
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
      name: "Power BI",
      image: powerbi,
      lessons: 4,
      students: 100,
      level: "Beginner",
    },
    {
      name: "API Testing",
      image: apitesting,
      lessons: 6,
      students: 160,
      level: "Beginner",
    },
    {
      name: "Tally",
      image: tally,
      lessons: 4,
      students: 120,
      level: "Beginner",
    },
    {
      name: "AWS",
      image: aws,
      lessons: 10,
      students: 280,
      level: "Advanced",
    },
    {
      name: "DevOps",
      image: devops,
      lessons: 8,
      students: 180,
      level: "Intermediate",
    },
  ];

  const courses = [
    {
      name: "Artificial Intelligence",
      image: ai,
    },
    {
      name: "Machine Learning",
      image: ml,
    },
    {
      name: "Data Science",
      image: ds,
    },
    {
      name: "Web Development",
      image: webdevelopment,
    },
  ];

  return (
    <>
      {courses.map((course, index) => (
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
              Lessons: {moreCourses[index].lessons}
            </div>
            <div className={styles.stats}>
              <Image src={students} />
              Students: {moreCourses[index].students}
            </div>
            <div className={styles.stats}>
              <Image src={level} />
              {moreCourses[index].level}
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

      {showMoreCourses ? (
        <>
          {moreCourses.map((course, index) => (
            <div className={styles.course_card} key={index + courses.length}>
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
                  Lessons: {course.lessons}
                </div>
                <div className={styles.stats}>
                  <Image src={students} />
                  Students: {course.students}
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