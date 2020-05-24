import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'


class XpChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ['Python', 'Node.js', 'C++', 'HTML', 'CSS', 'Materialize and bootstrap', 'React', 'jQuery', 'Javascript', 'MongoDB'],
                datasets: [
                    {
                        label: 'Proficiency',
                        backgroundColor: 'rgba(00,255,00,0.1)',
                        borderColor: '#00FF00',
                        borderWidth: 2,
                        data: [95, 85, 85, 95, 70, 90, 75, 60, 90, 85]
                    }
                ]

            }
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className="chart">
                <Radar
                    data={data}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        scale: {
                            angleLines: {
                                display: true
                            },
                            ticks: {
                                suggestedMin: 30,
                                suggestedMax: 100
                            }
                        }
                    }}

                />
            </div>
        );
    }
}


export default XpChart;