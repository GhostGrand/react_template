import React, { useEffect, useState } from "react";

const url = 'http://45.15.159.0:5000/api/answer';

function AnswersData() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    function apiGet() {
      fetch(url, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnswers(data);
      });
    }
    apiGet();
  }, [])

  return (
    <div>
      {answers.map(answer => (
        <div key={answer.id}>
          {answer.value.reduce(
            ([unique, occ], curr) => {
              if (!unique.includes(curr)) {
                unique.push(curr);
                occ.push(answer.value.filter((num) => num === curr).length);
              }
              return [unique, occ];
            },
            [[], []]
          )}
        </div>
      ))}
    </div>
  )
}

export default AnswersData;
