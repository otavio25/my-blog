import React from 'react';
import './styles.css'
import { Container } from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdf from '../img/TCC_versao_final.pdf'

function TCC(){
    const newPlugin = defaultLayoutPlugin()
    return (
        <Container className='pdf'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdf} plugins={[newPlugin]} onError={(e) => console.error('Erro ao carregar o PDF:', e)}/>
            </Worker>
        </Container>
    )
}

export default TCC