'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Nav } from '../components/navbar'
import Footer from '../components/footer'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const ResumePage = () => {
  const pdfUrl = '/data/Resume/resume.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="w-full min-h-screen bg-[#121212] flex flex-col">
      <Nav />
      <div className="flex-1 w-full flex flex-col items-center justify-start gap-4 pt-8">
        <Button onClick={handleDownload} variant={'default'}>
          <Download /> Download
        </Button>
        <div className="border w-full h-full rounded-t-3xl overflow-hidden relative">
         
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div className="h-full ">
              <Viewer
                fileUrl={pdfUrl}
                defaultScale={1}
              />
            </div>
          </Worker>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ResumePage
