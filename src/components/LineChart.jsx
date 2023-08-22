import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Aachen",
        recclass: "L5",
        mass: "21",
        year: "1880-01-01T00:00:00.000",

    },
    {
        name: "Aarhus",
        recclass: "H6",
        mass: "720",
        year: "1951-01-01T00:00:00.000",

    },
    {
        name: "Abee",
        recclass: "EH4",
        mass: "107000",
        year: "1952-01-01T00:00:00.000",

    },
    {
        name: "Acapulco",
        recclass: "Acapulcoite",
        mass: "1914",
        year: "1976-01-01T00:00:00.000",

    },
    {
        name: "Achiras",
        recclass: "L6",
        mass: "780",
        year: "1902-01-01T00:00:00.000",

    },

];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="recclass">{`Recclass: ${payload[0].payload.recclass}`}</p>
                <p className="mass">{`Mass: ${payload[0].payload.mass}`}</p>
                <p className="year">{`Year: ${payload[0].payload.year}`}</p>
            </div>
        );
    }

    return null;
};

export default function App() {
    return (
        <div className="flex justify-center items-center">
            <LineChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 65,
                    right: 60,
                    left: 60,
                    bottom: -20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis scale="log" domain={['auto', 'auto']} reversed={true} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="mass"
                    stroke="#8884d8"
                // strokeDasharray="5 5"
                />
                <Line
                    type="monotone"
                    dataKey="recclass"
                    stroke="#8884d8"
                // strokeDasharray="3 4 5 2"
                />
            </LineChart>
        </div>
    );
}