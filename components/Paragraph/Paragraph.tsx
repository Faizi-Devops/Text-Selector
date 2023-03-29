import { useState } from "react";

const Paragraph = () => {
    const [data,setData]=useState()
    const [splitter,setSplitter] = useState()
    const alpha = (e:any) =>{
        setData(e.target.value)


    }

    const onAddHandler = () =>{
        let a = data?.split(".");
        const lineCount = a.length;
        
        
        console.log(splitter);
        console.log(a.length);
        const randomIndex = Math.floor(Math.random() * (lineCount - 1)); 
  const selectedLines = a.slice(randomIndex, randomIndex + 2); 
  setSplitter( selectedLines.join(". "));
        
    }


    return (
        <div>
            <div className="d-flex justify-content-center pt-5">
            <div className="card" style={{ width: "30rem" }}>

                <div className="card-body">
                    <h5 className="card-title text-center ">Text Selector</h5>
                    <div className="mb-3 mt-4">
                
                        <input type="email" className="form-control" placeholder="Enter your Text" onChange={alpha}/>

                    </div>
                    <div className="text-center">
                    <button type="button" className="btn btn-primary" onClick={onAddHandler}>Click me</button>

                    </div>
                    <p className="blink">{splitter}</p>

                </div>

            </div>
            </div>

        </div>
    )
}
export default Paragraph;