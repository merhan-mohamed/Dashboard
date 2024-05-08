import React from 'react';
import { Header } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort,Filter, Page, ExcelExport, Edit, PdfExport } from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Orders" category="Page"/>
      <GridComponent 
      id='GridComp' 
      dataSource={ordersData}
      allowPaging
      allowSorting>
        <ColumnsDirective>
        {ordersGrid.map((item, index) => 
        <ColumnDirective  Key={index}{...item} />
       
       )}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
