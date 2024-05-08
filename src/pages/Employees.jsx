import React from 'react';
import { Header } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid} from '../data/dummy';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title="" category="Employess"/>
    <GridComponent 
    dataSource={employeesData}
    allowPaging
    allowSorting
    toolbar={['Search']}
    width="auto">
      <ColumnsDirective>
      {employeesGrid.map((item, index) => 
      <ColumnDirective  Key={index}{...item} />
     
     )}
      </ColumnsDirective>
      <Inject services={[ Page, Search, Toolbar]}/>
    </GridComponent>
  </div>
  )
}

export default Employees
