import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

let url = 'http';

function QuestionData() {
  const [questions, setQuestions] = useState([
    {id: 1, title:'Вопрос 1',
    options: [
      {value: 1, descripton: "yes"},
      {value: 2, descripton: "no"},
      {value: 3, descripton: "mb"},
      {value: 4, descripton: "фак"}
    ]}
  ]);

  useEffect(() => {
    function apiGet() {
      fetch(url, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((json) => {
        setQuestions(json)
      })
    }
    apiGet();
  })

  return (
    <div>
      {questions.map(item => (
        <p key={item.id}>
          {item.title}
          <ul>
          {item.options.map(answer => (
            <li key={answer.value}>{answer.descripton}</li>
            ))}
          </ul>
          
          </p>
      ))}
    </div>
)
}

export default QuestionData;