import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import PageNotFound from "../page-not-found";

const Course = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  async function fetchData() {
    const res = await fetch(
      `${process.env.REACT_APP_PORT}/courses/${params.id}`
    );
    const data = await res.json();
    setCourse(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loading />;
  if (!course) return <PageNotFound />;

  return <div>Course</div>;
};

export default Course;
