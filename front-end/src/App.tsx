
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css'


const App: React.FC = () => {
  const [name, setName] = useState()
  const [numPages, setNumPages] = useState<any>()
  const [pageNumber, setPageNumber] = useState(1)


  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }): void => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const handleClick = (url: any) => {
    setName(url)
  }

  useEffect(() => {
    const get = async () => {
      const res = await axios.get('pdf/all')
      console.log(res.data);

    }

    get()
  }, [])

  return (
    <div className='App'>
      <div className="menu">
        <h2>menu</h2>
        <div className="buttons">
          <button className="google" onClick={() => handleClick('google.com')}>Google</button>
          <button className="youtube" onClick={() => handleClick('youtube.com')}>Youtube</button>
          <button className="facebook" onClick={() => handleClick('facebook.com')}>Facebook</button>
        </div>
      </div>
      {name && <Document file={{
        url: `pdf/get/${name}`,
      }} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>}

    </div>
  )
}

export default App
