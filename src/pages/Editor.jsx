import React from 'react';
import { Header } from '../components';
import {RichTextEditorComponent, HtmlEditor, Toolbar, Image, Link, QuickToolbar, Inject} from "@syncfusion/ej2-react-richtexteditor";

const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Editor" category="App"/>
      <RichTextEditorComponent>
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
