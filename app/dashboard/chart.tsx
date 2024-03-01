
'use client'
import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <div>Loading Chart...</div> });

interface BarChartState {
  options: {
    chart: {
      id: string;
    };
    xaxis: {
      categories: number[];
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
}

class BarChart extends Component<{}, BarChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="">
        { (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="500"
          />
        )}
      </div>
    );
  }
}

export default BarChart;
