import React from "react"
import './App.css'
import targImg from "./static/target.svg"

function Canvas() {
    const [target,setTarget]=React.useState(false);
  return (
    <>
    <div className="row m-0 vh-100 text-light">

            {target && 
                <div className="col-3 bg-black p-4 vh-100 target-tab">
                    <div className="bg-dark h-100 rounded-5 ">
                        <button onClick={()=>setTarget(false)} className="target-toggler-close rounded-5 btn btn-light">
                            <i className="bi bi-reply-fill"></i>
                        </button>
                        
                    </div>
                </div>
            }
            <div className="bg-black col vh-100">
                {!target && <button onClick={()=>setTarget(true)} className="target-toggler-open btn rounded-5 btn-outline-light">
                    <i className="bi bullseye bi-bullseye"></i>
                    </button>}
            </div>
            <div className="col-3 d-flex flex-column bg-black p-5 gap-4 word-lib vh-100 p-4 ">
                <div className="bg-dark rounded-5 h-100">
                    
                </div>
                <div className="w-100 search-comp d-flex align-items-center justify-content-center">
                    <input type="text" className="search rounded-5 p-2 px-3 placeholder-wave text-light bg-black" placeholder={"Search for word..."} />
                </div>
            </div>
    </div>
    </>
  )
}
export default Canvas