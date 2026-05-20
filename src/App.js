import React from 'react';
import MainContent from './components/Main';
import Page1 from './page/page1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page2 from './page/page2';
import Page3 from './page/Page3';
import Page4 from './page/Page4';
import Page5 from './page/Page5';
import Page6 from './page/Page6';
import Page7 from './page/Page7';
import Page8 from './page/Page8';
import Page9 from './page/Page9';
import Page10 from './page/Page10';
import Page11 from './page/Page11';
import Page12 from './page/Page12';
import Page13 from './page/Page13';
import Page14 from './page/Page14';
import Page15 from './page/Page15';
import Page16 from './page/Page16';
import Page17 from './page/page17';
import Page18 from './page/Page18';
import Page19 from './page/Page19';
import Page20 from './page/Page20';
import Page21 from './page/Page21';
import Page22 from './page/Page22';
import Page23 from './page/Page23';
import Page24 from './page/Page24';
import Page25 from './page/Page25';
import Page26 from './page/Page26';
import Page27 from './page/Page27';
import Contact from './page/Contact';

import News1 from './News/News1';
import News2 from './News/News2';
import News3 from './News/News3';
import News4 from './News/News4';
import News5 from './News/News5';
import News6 from './News/News6';
import News7 from './News/News7';


function App() {
  return (
    < >
      
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<MainContent />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page14" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page16" element={<Page16 />} />
          <Route path="/page17" element={<Page17 />} />
          <Route path="/page19" element={<Page19 />} />
          <Route path="/page20" element={<Page20 />} />
          <Route path="/page18" element={<Page18 />} />
          <Route path="/page21" element={<Page21 />} />
          <Route path="/page22" element={<Page22 />} />
          <Route path="/page23" element={<Page23 />} />
          <Route path="/page24" element={<Page24 />} />
          <Route path="/page25" element={<Page25 />} />
          <Route path="/page26" element={<Page26 />} />
          <Route path="/page27" element={<Page27 />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/News1" element={<News1 />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/News4" element={<News4 />} />
          <Route path="/News5" element={<News5 />} />
          <Route path="/News6" element={<News6 />} />
          <Route path="/News7" element={<News7 />} />
        </Routes>
       
      </BrowserRouter>
      
    </ >
  );
}

export default App;
