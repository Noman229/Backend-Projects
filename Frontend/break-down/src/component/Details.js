import { useState } from "react";

const Details = () => {
    const [showDetails, setShowDetails] = useState(false)

    
    return(
        <>
           {showDetails && (
                <div className="add-friend-form ">
                <h2>Heading</h2>
                    <div>
                        <label htmlFor="fName">Bill Value</label>
                        <input type="text" name="fName" id="fName" />
                    </div>
                    <div>
                        <label htmlFor="fImage">Your Expense</label>
                        <input type="text" name="fImage" id="fImage" />
                    </div>
                    <div>
                        <label htmlFor="fImage">Friend Expense</label>
                        <input type="text" name="fImage" id="fImage" />
                    </div>
                    <div>
                        <label htmlFor="fImage">Who is paying the bill?</label>
                        <input type="text" name="fImage" id="fImage" />
                    </div>
                    <div className="detail-com"> 
                        <a href="#" className="btn">Split Bill</a>
                    </div>
                </div>
           )}
        </>
    )
}

export default Details;
