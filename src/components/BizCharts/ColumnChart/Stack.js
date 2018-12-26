import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";

class StackChart extends React.Component {
  render() {
    const {data, title} = this.props
    
    return (
      <div>
        <div>{title}</div>
        <Chart height={400} data={data} forceFit>
          <Legend />
          <Axis name="year" />
          <Axis name="money" />
          <Tooltip />
          <Geom
            type="intervalStack"
            position="year*money"
            color={['stack', ['red', 'blue', 'yellow']]}
          />
        </Chart>
      </div>
    );
  }
}

export default StackChart
