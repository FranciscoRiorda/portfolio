import React from "react";
import { useEffect } from "react";
import "../Portfolio/portfolioStyles.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import ItemProyectos from "../../componentes/ItemProyectos/ItemProyectos";
import BeatLoader from "react-spinners/BeatLoader";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "proyectos"));

      const querySnapshot = await getDocs(q);
      const proyectosFirebase = [];
      querySnapshot.forEach((doc) => {

        proyectosFirebase.push({ ...doc.data(), id: doc.id });
      });
      setData(proyectosFirebase);
    })();
  }, []);

  console.log(data);

  return data.length === 0 ? (
    <div className="spinners">
      <BeatLoader color="hsla(168, 0%, 97%, 1)" loading margin={7} size={20} />{" "}
    </div>
  ) : (
    <div className="principalPortfolio">
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
    </div>
  );
};

export default Portfolio;
