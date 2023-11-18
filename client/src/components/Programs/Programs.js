import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgramsCard from "../ProgramsCard/ProgramsCard";


function Programs() {
  const { id } = useParams();
  const getProgramsURL = `${process.env.REACT_APP_BASE_URL}/explore/programs/${id}`;

  const [programList, setProgramList] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    axios.get(getProgramsURL).then((response) => {
      setProgramList(response.data);
      setCategoryId(response.data.category_id);
    });
  }, []);

  return (
    <div>
      {programList.map((programs, index) => {
        return (
          <ProgramsCard
            key={index}
            program={programs}
            programId={programList.category_id}
          />
        );
      })}
    </div>
  );
}

export default Programs;
