import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import PageNotFound from "../page-not-found";

const Course = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_PORT}/courses/${params.id}`
      );
      const data = await res.json();
      setCourse(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(course);
  if (loading) return <Loading />;
  if (!course) return <PageNotFound />;

  return <div>Course</div>;
};

export default Course;
