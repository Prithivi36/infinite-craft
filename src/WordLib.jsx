function WordLib() {
  return (
    <div className="col-3 d-flex flex-column bg-black p-md-5 gap-4 word-lib p-4 ">
        <div className="bg-glass rounded-5 h-100">
            
        </div>
        <div className="w-100 search-comp d-flex align-items-center justify-content-center">
            <input type="text" className="search rounded-5 p-1 p-md-2 px-3 placeholder-wave text-light bg-black" placeholder={"Search for word..."} />
        </div>
    </div>
  )
}
export default WordLib