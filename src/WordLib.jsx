import Word from "./Word"

function WordLib() {
    const words =[
        "apple",
        "brisk",
        "canvas",
        "delta",
        "echo",
        "frost",
        "glimmer",
        "hollow",
        "ignite",
        "jungle",
        "frost",
        "lunar",
        "mystic",
        "canvas",
        "delta",
        "mystic",
        "echo",
        "glimmer",
        "hollow",
        "ignite",
        "jungle",
        "knight",
        "lunar",
        "canvas",
        "delta",
        "echo",
        "glimmer",
        "knight",
        "frost",
        "hollow",
        "prism",
        "ignite",
        "jungle",
        "knight",
        "lunar",
        "mystic",
        "nebula",
        "oasis",
        "quartz",
        "ripple",
        "solace",
        "thrive",
        "umbra",
        "velvet",
        "whisper",
        "xenon",
        "yonder",
        "zephyr"
    ]
  return (
    <div className="col-3 d-flex flex-column bg-black p-md-5 gap-4 word-lib p-4 ">
        <div className="bg-glass row py-3 gap-2 px-2 word-container rounded-5 h-100">

            {
                words.map((w,i)=>{
                    return (
                        <Word key={i} w={w} />
                    )
                })
            }
        </div>
        <div className="w-100 search-comp d-flex align-items-center justify-content-center">
            <input type="text" className="search rounded-5 p-1 p-md-2 px-3 placeholder-wave text-light bg-black" placeholder={"Search for word..."} />
        </div>
    </div>
  )
}
export default WordLib