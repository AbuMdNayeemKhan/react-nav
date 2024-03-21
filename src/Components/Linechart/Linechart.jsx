import { LineChart, Line } from 'recharts';
const students = [
      {"name": "Student 1", "math_marks": 85},
      {"name": "Student 2", "math_marks": 78},
      {"name": "Student 3", "math_marks": 92},
      {"name": "Student 4", "math_marks": 64},
      {"name": "Student 5", "math_marks": 70},
      {"name": "Student 6", "math_marks": 88},
      {"name": "Student 7", "math_marks": 75},
      {"name": "Student 8", "math_marks": 81},
      {"name": "Student 9", "math_marks": 90},
      {"name": "Student 10", "math_marks": 72}
    ]

  
const Linechart = () => {
    return (
        <div>
            <LineChart width={1920} height={400} data={students}>
                <Line dataKey={"math_marks"} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default Linechart;