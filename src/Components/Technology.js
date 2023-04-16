import React, { useContext } from 'react'
import DisplayB from './DisplayB';
import DateDetailsDisplay from './DateDetailsDisplay';
import { Data1 } from './DataDetails';

const Technology = () => {
  const [datacontext] = useContext(Data1)
  console.log(datacontext)
  return (
    <>

<h1 style={{ marginLeft: "60px" }}>
       Technology
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {datacontext
                        .filter((element) => {
                            return element.category === "Technology";
                        })
                        .map((n) => (
                            <DateDetailsDisplay
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
/>
                        ))}
                </div>
                       
                <div className="sidebar2">
                <h1 style={{ marginTop: "2px", display: "inline-block" }}>
                    TOP News
                </h1>
                <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                {datacontext
                        .filter((element) => {
                            return element.category === "Technology";
                        })
                        .map((n) => (
                            <DisplayB
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
                                
                            />
                        ))}
                </div>
                </div>  
    </>
  )
}

export default Technology