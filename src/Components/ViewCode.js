import {Button} from 'antd'
import NavBar from './NavBar'

function View({html, css, js, name}){
    const run = () => {
        const htmlCode = html;
        const cssCode = "<style>" + css + "</style>";
        const jsCode = js;
        const output = document.querySelector(".editor #myiframe");
        
        output.contentDocument.body.innerHTML = htmlCode+cssCode;
        output.contentWindow.eval(jsCode)
    }

    return(
        <div className="division">
            <NavBar />
            <div className="view-division">
                <div className="editor">
                    <Button onClick={run} className="run-button">Run</Button>
                    <iframe title={name} id="myiframe" className="frame" onload="injectJS()"></iframe>
                </div>
            </div>
        </div>
    )
}

export default View