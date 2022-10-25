import React, { useState, useEffect } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const res = await fetch(process.env.REACT_APP_COURSES_API);
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { courses, loading };
};

export default useCourses;
