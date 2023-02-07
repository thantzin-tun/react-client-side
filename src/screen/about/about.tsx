import React,{useState,useEffect} from "react";

type AboutProps = {

}

export const About:React.FC<AboutProps> = () => {
  const [message,setMessage] = useState<string | undefined>( "");
  const [receive,setReceive] = useState<any>([]);

  const handleSubmit  = (e: any) => {
    e.preventDefault();

    setMessage("");
  }

  useEffect(() => {
     
  },[])

  return(
    <>
      <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>Chat With Me!</h2>
              <form onSubmit={handleSubmit}>
                <input type="text"  id="" className="form-control" name="message" value={message} 
                onChange={(e) =>setMessage(e.target.value) }
                />
                <button type="submit" className="btn btn-primary mt-3">Send!</button>
              </form>
            </div>
            <ul className="list-group mt-3">
              {
                  receive?.map((msg: string,index: number) => (
                    <li className="list-group-item"
                    key={index}
                    >{msg}</li>
                  ))
              }
            </ul>
          </div>
      </div>
    </>
  )
}