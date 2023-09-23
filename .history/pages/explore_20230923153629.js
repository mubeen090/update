import React from "react";
import CourseCard from "../common/CourseCard/CourseCard";

const ExplorePage = () => {
  // Fetch and store the remaining courses data from your backend or API
  
  const remainingCourses = [
    { slug: "cyber-security" },
    { slug: "big-data" },
    { slug: "oracle-developer" },
    { slug: "django" },
    { slug: "tally" },
    { slug: "java" },
    { slug: "python" },
    { slug: "digital-marketing" },
  ];

  return (
    <div>
      <h1>Explore All Courses</h1>
      <div>
        {remainingCourses.map((course) => (
          <CourseCard key={course.slug} slug={course.slug} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;