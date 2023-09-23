import styles from "./PopularCoursesSection.module.css";
import Heading from "../common/Heading/Heading";
import CourseCard from "../common/CourseCard/CourseCard";
import Link from "next/link";

const PopularCoursesSection = () => {
  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Most Popular Class"}
          para2={
            "Let's join our famous class, the knowledge provided will definitely be useful for you."
          }
        />
        <div className={styles.pop_course_container}>
          <CourseCard slug={"machine-learning"} />
          <CourseCard slug={"artificial-intelligence"} />
          <CourseCard slug={"learn-figma"} />
          <CourseCard slug={"web-dev"} />
          <CourseCard slug={"ui-ux-design"} />
          <CourseCard slug={"data-science"} />
          <CourseCard slug={"cyber-security"} />
          <CourseCard slug={"big-data"} />
          <CourseCard slug={"oracle-developer"} />
          <CourseCard slug={"django"} />
          <CourseCard slug={"tally"} />
          <CourseCard slug={"java"} />
          <CourseCard slug={"python"} />
          <CourseCard slug={"digital-marketing"} />
        </div>
        <div className={styles.btn_container}>
          <Link href="/explore">
            <button className={styles.btn}>Explore All Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCoursesSection;