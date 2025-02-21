import Home from "./Component/Home";
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { pdfjs } from 'react-pdf';
import { createTheme, MantineProvider } from '@mantine/core';
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl': '1280px',
    },
  });
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
