import { Tooltip, Inject, StackingColumnSeries, Legend, Category, ChartComponent, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { stackedPrimaryXAxis, stackedPrimaryYAxis, stackedCustomSeries } from "../../data/dummy";
import React from 'react'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
    width={width}
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{ enable:true}}
    lengendSettings = {{background:'white'}}
 
    >
      <Inject services = {[Tooltip, StackingColumnSeries, Legend, Category]} />
      <SeriesCollectionDirective>
      {stackedCustomSeries.map((item, index) => 
      <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    
    </ChartComponent>
  )
}

export default Stacked
