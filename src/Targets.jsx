function Targets(props) {
  return (
    <div className=" col-md-3 bg-black p-4 vh-100 target-tab">
        <div className="bg-glass h-100 rounded-5 ">
            <button onClick={()=>props.setTarget(false)} className="target-toggler-close rounded-5 btn btn-light">
                <i className="bi bi-reply-fill"></i>
            </button>
            
        </div>
    </div>
  )
}
export default Targets