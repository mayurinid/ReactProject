import React, { useContext } from 'react'
import { Data1 } from './DataDetails'
import Datamapping from './Datamapping'
import DateDetailsDispaly from './DateDetailsDisplay'
import DisplayB from './DisplayB'


const Home = () => {
  const [datacontext] = useContext(Data1)
  console.log(datacontext)
  const filtered2 = datacontext.filter((elements) => {
    return elements.category === 'Technology' && elements.id === 33;
  });
  console.log(filtered2)
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className='home-left'>
            <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/29v7brgbosvhq2470fw1atiohqf8_1iugg0yk6nhcinmwa1otnfizt2zb_f04a5apypq630r0tlsih5xa8fizz_19f727_defd2a312df542b39decc069c3d667d4_mv2%20%281%29.jpg"} alt="not found" />
            <p>Title of the gallery</p>
          </div>
          <div className='home-right'>
            <div className='home-right-top'>
              <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/p7a0v36n55ycpwiszk0y4u8k0xpm_66178230_2387537744905388_1314740131264987136_n.jpg"} alt="not found" />
            </div>
            <div className='home-right-buttom'>
              <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/jzydq36w4f52ciuwv6wl2htosu5x_IMG_20220928_114116.jpg"} alt="not found" />
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "40px" }}>The Latest</h1>
      <hr style={{ color: "red", width: "500px" }} />

      <div className="home__left">
        {filtered2.map((n, index) => (
          <Datamapping
            key={n.index}
            elementsid={n.id}
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 100)}
          />
        ))
        }
      </div>
      <div className="home__left">
        {datacontext.filter((elements) => {
          return elements.category === 'Technology' && elements.id === 32;
        })
          .map((n, index) => (
            <Datamapping
              key={n.index}
              elementsid={n.id}
              imgUrl={n.img}
              title={n.title}
              description={n.description.slice(0, 100)}
            />
          ))
        }
      </div>
      <div className="home__left">
        {datacontext.filter((elements) => {
          return elements.category === 'Technology' && elements.id === 31;
        }).map((n, index) => (
          <Datamapping
            key={n.index}
            elementsid={n.id}
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 100)}
          />
        ))
        }
      </div>
      <h1 style={{ marginTop: "40px" }}>
        Latest Articles
      </h1>
      <hr style={{ width: "200px", thickness: "20px" }} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {datacontext
                        .filter((element) => {
                            return element.category === "Bollywood";
                        })
                        .map((n) => (
                            <DateDetailsDispaly
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
/>
                        ))}
                </div>
                       
                <div className="sidebar2">
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    TOP News
                </h1>
                <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                {datacontext
                        .filter((element) => {
                            return element.category === "Bollywood";
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
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
        Latest Stories
      </h1>
      <hr style={{ width: "200px", thickness: "20px" }} />
      <div className="home__left">
                    {datacontext
                        .filter((elements) => {
                          return elements.category === 'Hollywood' && elements.id === 1;
                        })
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                               
                            />
                        ))}
                </div>

                <div className="home__left">
                    {datacontext
                        .filter((elements) => {
                          return elements.category === 'Bollywood' && elements.id === 8;
                        })
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                              
                            />
                        ))}
                </div>

                <div className="home__left">
                    {datacontext
                        .filter((elements) => {
                            return elements.category === 'Food' && elements.id === 17;
                        })
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                                          />
                        ))}
                </div>
          
        
    </>
  )
}

export default Home