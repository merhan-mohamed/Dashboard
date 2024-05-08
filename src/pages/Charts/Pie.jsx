import React from 'react';
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const {CurrentMode} = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className=" w-full">
    <AccumulationChartComponent legendSettings={{position:"Top", background:"white"}}
     tooltip={{ enable: true }} 
     background={CurrentMode === 'Dark' ? '#33373E' : '#fff'}
     >
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective
        type='Pie'
        dataSource={pieChartData}
        xName="x"
        yName="y"
        dataLabel={{visible:true, name:"text", position:"Inside"}}
        innerRadius='50%'
      
       
      >
      </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>

    </AccumulationChartComponent>
    </div>
    </div>
);

};

export default Pie