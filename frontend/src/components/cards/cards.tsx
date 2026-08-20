import React from 'react'
import './cards.css'


const Cards = ({ task_name }: { task_name: string }) => {
  return (
    <div className="card">
        <div className="task-info">
            <h1>{task_name}</h1>
            <p>Статус</p>
            <button>Выполнить</button>
        </div>
    </div>
  )
}


export default Cards