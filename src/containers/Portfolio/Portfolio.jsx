import React from "react";
import { useEffect } from "react";
import "../Portfolio/portfolioStyles.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import ItemProyectos from "../../componentes/ItemProyectos/ItemProyectos";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "proyectos"));

      const querySnapshot = await getDocs(q);
      const proyectosFirebase = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        proyectosFirebase.push({ ...doc.data(), id: doc.id });
      });
      setData(proyectosFirebase);
    })();
  }, []);

  console.log(data);

  return (
    <>
      <div className="portfolio">
        <div className="containerPortfolio">
          <span>PORTFOLIO</span>
        </div>
      </div>
      <div className="itemProyect">
        {data.map((dat) => {
          return <ItemProyectos key={dat.id} dat={dat} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
