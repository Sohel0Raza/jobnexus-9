import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        { id: 'A1', name: "Assignment-1", mark:57},
        { id: 'A2', name: "Assignment-2", mark:58},
        { id: 'A3', name: "Assignment-3", mark:60},
        { id: 'A4', name: "Assignment-4", mark:60},
        { id: 'A5', name: "Assignment-5", mark:60},
        { id: 'A6', name: "Assignment-6", mark:50},
        { id: 'A7', name: "Assignment-7", mark:56},
        { id: 'A8', name: "Assignment-8", mark:60},

    ]
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-center p-4 md:my-10'>All Assignment Mark</h2>
            </div>
            <div className='md:w-9/12 mx-auto p-4'>
            <AreaChart 
            width={800}
            height={400}
            data={assignmentMarks}
            >
                <XAxis dataKey="id"></XAxis>
                <YAxis></YAxis>
                <Tooltip/>
                <Area type="monotone" stroke="#8884d8" fill="#8884d8" dataKey="mark"/>
            </AreaChart>
        </div>
        </div>
    );
};

export default Statistics;