import './App.css'
import { Alert} from '@mui/material';
import { Navigate } from 'react-router-dom';

function What() {

  function go(){
    window.open("https://10.102.7.123/ui/");
  }
  function  copytest(){
    navigator.clipboard.writeText("@adm1n@replace");
  }

  

    return (
     <div className="App">
       <p>{"Support Remote On Mobile"}</p>
       <button onClick={() => {(navigator.clipboard.writeText("Adm1n@replace"),(window.open("https://10.102.7.123/ui/")))}} >
           VcLKB
       </button><br/>
       <button onClick={() => {(navigator.clipboard.writeText("Adm1n@replace"),(window.open("https://10.106.7.128/ui/")))}} >
           VcPY
       </button><br/>
       <button onClick={() => {(document.getElementById('text').value='P@ssw0rd',navigator.clipboard.writeText("P@ssw0rd"))}} >
            P@
       </button><br/>
       <button onClick={() => {(document.getElementById('text').value='P@ssw0rdM7',navigator.clipboard.writeText("P@ssw0rdM7"))}} >
           P@M7
       </button><br/>

       <input id="text"></input>

     </div>);

  // </div>
    

    // </>
    
  // );
}

export default What