import React from 'react';
import {LineChart,ResponsiveContainer,Line, XAxis, ReferenceLine, CartesianGrid, YAxis} from 'recharts'
import {calculateBiorhythmsSeries} from '../calculations'
import dayjs from 'dayjs'

function formatDate(isoString)
{
    return dayjs(isoString).format('DD MMM')
}

const Chart = ({birthDate, targetDate}) => {

    const startDate= dayjs(targetDate).subtract(15,'days').toISOString()
    const data=calculateBiorhythmsSeries(birthDate, startDate, 31)
        .map((item)=>({...item, date: formatDate(item.date)}))
    // console.log(data)
    return (
        <div className="Chart">
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey='date'
                    ticks={[data[3].date,data[15].date,data[27].date]}
                />
                <YAxis ticks={[1,0,-1]}  interval={0} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={data[15].date} />
                <Line type="natural" dot={false} stroke="green" dataKey='physical' />
                <Line type="natural" dot={false} stroke="red" dataKey='emotional' />
                <Line type="natural" dot={false} stroke="blue" dataKey='intellectual' />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Chart;