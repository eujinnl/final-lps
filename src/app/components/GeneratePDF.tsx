import React from "react";
import { jsPDF } from "jspdf";


const GeneratePdf = () => {
    
  const handleClick = () => {
    const doc = new jsPDF({orientation: 'p',
    unit: 'mm',
    format: 'a4'});
    var rightStartCol1=200;
    var rightStartCol2=480;
    var InitialstartX=10;
    var startX=10;
    var InitialstartY=50;
    var startY=0;
    var lineHeights=12;
    doc.text("Leong Poh Seng", 80, 10,'center');


    doc.output("dataurlnewwindow");
    ;
  };


  return (
    <div>
        
            <button onClick={handleClick}>Generate PDF</button>
        
    </div>
  );
};

export default GeneratePdf;