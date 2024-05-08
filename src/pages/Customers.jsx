import React from 'react';
import { Header } from '../components';
import { GridComponent, Page, Edit, Selection, Sort, Filter, Toolbar, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title="Customers" category="Customers"/>
    <GridComponent 
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting:true, allowEditing:true}}
    width="auto">
      <ColumnsDirective>
      {customersGrid.map((item, index) => 
      <ColumnDirective  Key={index}{...item} />
     
     )}
      </ColumnsDirective>
      <Inject services={[ Page, Edit, Selection, Sort, Filter, Toolbar]}/>
    </GridComponent>
  </div>
  )
}

export default Customers
