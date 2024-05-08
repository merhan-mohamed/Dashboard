import { ChartComponent, DateTime, Inject, LineSeries, Legend, Tooltip, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import React from 'react';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';



const LineChart = () => {
  const{CurrentMode} = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border: {width:0}}}
      background={CurrentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
      
      >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) =>
        <SeriesDirective key={index} {...item}/>
        )}

      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
