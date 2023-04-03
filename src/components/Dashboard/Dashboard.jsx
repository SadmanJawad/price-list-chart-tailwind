import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    let studentsMarksArr = [
        { id: 1, name: "Alice", math: 80, physics: 70, chemistry: 90 },
        { id: 2, name: "Bob", math: 70, physics: 85, chemistry: 75 },
        { id: 3, name: "Charlie", math: 90, physics: 80, chemistry: 85 },
        { id: 4, name: "David", math: 75, physics: 90, chemistry: 80 },
        { id: 5, name: "Eve", math: 85, physics: 75, chemistry: 90 },
        { id: 6, name: "Frank", math: 80, physics: 85, chemistry: 70 },
        { id: 7, name: "Grace", math: 90, physics: 80, chemistry: 85 },
        { id: 8, name: "Harry", math: 75, physics: 90, chemistry: 80 },
        { id: 9, name: "Ivy", math: 85, physics: 75, chemistry: 90 },
        { id: 10, name: "Jack", math: 80, physics: 85, chemistry: 70 },
        { id: 11, name: "Kate", math: 90, physics: 70, chemistry: 75 },
        { id: 12, name: "Lucas", math: 75, physics: 85, chemistry: 90 }
      ];

    return (
        <div className='mt-10'>
            <h1 className='text-center font-extrabold text-4xl text-purple-950'>Students Number Chart practice</h1>
            <LineChart
            width={1000}
            height={300}
            data={studentsMarksArr}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Line stroke="red" dataKey="physics"></Line>
                <Line stroke="green" dataKey="math" ></Line>
                <Line stroke="blue" dataKey="chemistry" ></Line>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                
            </LineChart>
        </div>
    );
};

export default Dashboard;