import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.scss";
import science from "../../assets/Icons/science.png";
import engTech from "../../assets/Icons/eng-and-tech.png";
import business from "../../assets/Icons/business.png";
  
  
function Landing() {
  const exploreURL = `${process.env.REACT_APP_BASE_URL}/explore`;
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  // Get all three categories
  function getCategories() {
    axios
      .get(exploreURL)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  // const token = sessionStorage.getItem("token");

  return (
    <div className="category__main">
      <div className="category__sub-heading">
        <h2 className="category__h2">Explore Popular Fields of Study</h2>
        <p className="category__para">Explore exclusive programs to help you save time and money.</p>
      </div>
      {categories.map((category, index) => {
        return (
          <div className="category__container" key={index}>
            <button
              className="category__bttn"
              key={index}
              onClick={() => navigate(`/explore/programs/${category.id}`)}
            >
              <img
                className="category__icon"
                src={
                  category.id === 1 ? science : category.id === 2 ? engTech : business
                }
                alt={category.field}
              />
              <span className="category__bttn-text">{category.field}</span>
            
            </button>
          </div>
        );
      })}
   
    </div>
  );
}

export default Landing;
