import React, {useState} from "react";

const Cards = (props) => {
    // STEP 2 - add the imported data to state
    const [cardState] = useState(cards);
   
    
    return (

        cardState.map((item, index) => {
          console.log(item)
          return (
            <div className="card">
                <h3></h3>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>



          //<NumberButton setTotal= {props.setTotal} key={index} numbers={item} />
          // return <NumberButton setTotal total={item} value={item} index={index} className="numbers" />
          )

        })
         }
    );
  };
  
  export default Numbers