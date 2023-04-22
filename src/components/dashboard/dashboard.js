import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "../../../node_modules/chart.js/dist/chart.js";
import { useState } from 'react';

import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function Dashboard() {

  const [value, setValue] = useState(1);
   
  function chengeValue() {
     setValue(window.event.target.value);
  }

    return (
        <div class="container">
            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
              <a class="navbar-brand" href="#">Дашборд</a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">Предыдущий вопрос</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">Следующий вопрос</a>
                </li>
                
              </ul>
            </nav>

            <h1 class="text-center">Вопрос 1</h1>

            <p class="text-center">как выглядят фекалии вомбата в дикой природе?</p>

            <ul class="text-center">
              <li class="d-inline-block mx-3">Кружки</li>
              <li class="d-inline-block mx-3">Как у человека</li>
              <li class="d-inline-block mx-3">Кубики</li>
            </ul>

            <div class="row mb-5">
              <div class="col-4"></div>
              <div class="col-4">
                <Pie data={data} />
              </div>
            </div>
        
        </div>
    );
    
}