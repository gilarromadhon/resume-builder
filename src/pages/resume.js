import React from 'react';
import html2pdf from 'html2pdf.js'

export default function Resume() {
  
  function saveAsPdf() {
    html2pdf(document.getElementById('resume'), {
      margin: [0.1, 0, 0.1, 0.1],
      filename: 'resume.pdf',
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
  }

  return (
    <div>
      {/* <header className='spacing-sm'>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand">
                Resume
                <span style={{fontFamily: 'Poppins', fontWeight: 600, color: '#916BBF'}}>
                  Builder
                </span>
              </a>
          </div>
        </nav>
      </header> */}
      
      <section className='spacing-sm mt-5'>
        <div id="resume" className="mx-auto" style={{width: '790px', height: '1030px', backgroundColor: 'gray'}}>
          Centered element
        </div>
        <div className='mx-auto mt-5' style={{ width: '100px' }}>
        <button className='btn btn-primary' onClick={saveAsPdf} >Print</button>
        </div>
      </section>
    </div>
  );
}
