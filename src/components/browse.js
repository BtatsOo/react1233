import React, { useEffect, useState } from "react";
import Header from "./header";
import { dataCourse } from "../data/data";
import "../css/browse.css";
function Browse() {
  const [isOpactiy, setIsOpacity] = useState(false);
  const [courseData, setCourseData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(
          "http://localhost/wordpress2/wp-json/wp/v2/courses?_embed=true"
        );
        const data = await res.json();
        console.log(data);
        setCourseData(data);
      } catch {}
    }
    fetchData();
  }, []);
  useEffect(function () {
    setIsOpacity(true);
  }, []);

  return (
    <>
      {" "}
      <div className="browse-container">
        <div className="top-container">
          <Header isLogin={true} />
        </div>
        <div className="welcome-sec">
          <h1>اهلا بعودتك !</h1>
          <button className="btn">كورساتي</button>
          <p>تصفح الكورسات 🔽</p>
        </div>
        <section className="courses">
          <h1>الكورسات</h1>
          <div className="crs-container">
            {dataCourse.map((dataCrs) => (
              <Courses dataCrs={dataCrs} isOpactiy={isOpactiy} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
function Courses({ dataCrs, isOpactiy }) {
  return (
    <div className={`crs-sec ${isOpactiy ? "opacity-active" : ""}`}>
      <img src={dataCrs.url} alt="course" />
      <div className="crs-content-box">
        <h3>{dataCrs.title}</h3>
        <p>
          لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
          وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك
          السعادة البشرية.
        </p>
        <span className="kofta">
          <span className="price"> جنيه {dataCrs.price} </span>
          <span className="purshase">اشترك الان ! </span>
        </span>
      </div>
    </div>
  );
}

export default Browse;
