import React from "react"
import './App.css'
import WordLib from "./WordLib";
import Targets from "./Targets";
import Word from "./Word";
import logo from "./static/logo.svg"

function Canvas() {
    const [target,setTarget]=React.useState(false);
    const [dropped,setDropped]=React.useState([]);
    const [draggingInd,setDraggingInd]=React.useState(null);

    function handleMouseMove(e){
        e.preventDefault()
        if(draggingInd!=null){
            const tmp = [...dropped]
            tmp[draggingInd]={
                ...tmp[draggingInd],
                x : e.clientX,
                y : e.clientY
            }
            setDropped(tmp);
        }
    }

    function isOverlapping(x, y, cx, cy, threshold = 50) {
        return (
            Math.abs(x - cx) <= threshold &&
            Math.abs(y - cy) <= threshold
        );
    }

    function handleMouseUp(e){
        const x = e.clientX
        const y = e.clientY
        const tmp = [...dropped]

        for(let i = 0 ; i<tmp.length ; i++){
            if(i==draggingInd)continue
            const cx=tmp[i].x
            const cy=tmp[i].y

            if (isOverlapping(x, y, cx, cy, 25)) {
                tmp[i].data+=" "+tmp[draggingInd].data
                tmp.splice(draggingInd,1)
            }
        }
        setDropped(tmp);
        setDraggingInd(null)
    }


  return (
    <>
    <div className=" row m-0 vh-100 text-light">

            {target && 
                <Targets setTarget={setTarget} />
            }
            <div className="logo-sm d-md-none">
                <img className="img-fluid" src={logo} alt="" />
            </div>   
            <div className="bg-black canvas col-12 col-md"
                onMouseMove={(handleMouseMove)}
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>{
                    e.preventDefault()
                    const data = e.dataTransfer.getData("text/plain")
                    
                    const x = e.clientX;
                    const y = e.clientY;

                    setDropped((prev)=> [...prev,{data,x,y}]);

                    console.log("dropped into canvas");
                }}
            >
                    {!target && <button onClick={()=>setTarget(true)} className="target-toggler-open btn rounded-5 btn-outline-light">
                    <i className="bi bullseye bi-bullseye"></i></button>}

                    {/* items */}
                        {dropped.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: item.y,
                                    left: item.x,
                                    transform: 'translate(-50%, -50%)',
                                }}

                                onMouseUp={(e)=>{
                                    handleMouseUp(e)
                                }}
                                
                                onMouseDown={(e)=>{
                                    console.log("downed")
                                    e.preventDefault();
                                    if(e.ctrlKey){
                        
                                        const x = e.clientX;
                                        const y = e.clientY;

                                        setDropped((prev) => {
                                            const newDropped = [...prev, {data:item.data,x,y}];
                                            setDraggingInd(newDropped.length - 1);
                                            return newDropped;
                                        });

                                    }else{
                                        setDraggingInd(index)}}
                                    }
                            >
                                {<Word w={item.data} drag={false}/>}
                            </div>
                        ))}
            </div>
            <WordLib />
    </div>
    </>
  )
}
export default Canvas