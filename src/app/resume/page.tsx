'use client'
// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import '@react-pdf-viewer/core/lib/styles/index.css'
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Nav } from '../components/navbar'
import Footer from '../components/footer'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import resume from '../../../public/images/resume.svg'
import Image from 'next/image'
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
    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <Nav />
      <div className="flex-1 w-full flex flex-col items-center justify-start gap-4 pt-8">
        <Button onClick={handleDownload} variant={'default'}>
          <Download /> Download
        </Button>
        <div className=" md:w-3/4 lg:w-1/2 mb-5 bg-white flex justify-center items-center h-full">
        <Image 
          src={resume}
          alt="My Resume"
          priority
        />
         
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ResumePage
