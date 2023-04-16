import React, { useContext } from 'react'
import { Data1 } from './DataDetails'
import DateDetailsDisplay from './DateDetailsDisplay'
import DisplayB from './DisplayB'

const Food = () => {
  const [datacontext] = useContext(Data1)
  console.log(datacontext)
  return (
    <>
 
 <h1 style={{ marginLeft: "60px" }}>
 Food
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {datacontext
                        .filter((element) => {
                            return element.category === "Food";
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
                            return element.category === "Food";
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

export default Food