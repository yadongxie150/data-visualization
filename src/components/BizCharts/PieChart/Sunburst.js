import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Legend, View, Label } from 'bizcharts'
import './index.css'

class Sunburst extends Component {
  render() {
    const { title } = this.props
    const big = [
      { type: '实例1', value: 100 },
      { type: '实例2', value: 200 },
      { type: '实例3', value: 300 },
    ]
    const small = [
      { name: '子实例11', type: '实例1', value: 40 },
      { name: '子实例12', type: '实例1', value: 60 },
      { name: '子实例21', type: '实例2', value: 100 },
      { name: '子实例22', type: '实例2', value: 60 },
      { name: '子实例23', type: '实例2', value: 40 },
      { name: '子实例31', type: '实例3', value: 300 },
    ]
    return (
      <div>
        <div>{title}</div>
        <Chart height={400} data={big} forceFit>
          <Coord type="theta" radius={0.6} />
          <Geom type="intervalStack" position="value" color="type">
            <Label content="type" offset={-30} />
          </Geom>
          <Tooltip />
          <View data={small}>
            <Coord type="theta" radius={1} innerRadius={0.6} />
            <Geom type="intervalStack" position="value" color="name">
              <Label content="name" />
            </Geom>
          </View>
        </Chart>
      </div>
    )
  }
}

export default Sunburst
