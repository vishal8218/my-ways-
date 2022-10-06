import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect,useState,axios,apiURL } from "react";

import data1 from './weather.json';
import './App.css';
function App()
{
 {/* const dec=({                                            //declare variable name.
    title,item,wind,atmosphere,astronomy,forecast,
  })=>*/}
  
  {/*                                                       //Fecth data from the weather.json file
  const fetchdata=data1.map((data1)=>
  {
    return(
<div>

title={data1.map(title)},
item={data1.map(item)},
wind={data1.map(wind)},
atmosphere={data1.map(atmosphere)},
astronomy={data1.map(astronomy)},
forecar={data1.map(forecast)},
</div>
)
})*/}
const handleSearch = ()=>
{
  
alert("Please Enter a valid City or this city is not present in our file/database")
}
  return (
    <div>
      <div className="col-md-12"></div>
    <div className="weathers"></div>
    <div className="enter_details">
    <div className="d-grid col-2 mt-4">
    <label for="City Name">Enter City Name</label>
    <input type="text"></input>
    <div className="d-grid gap-2 col-4 mt-4"></div>
    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
    </div>
    </div>
    </div>
  )
}

export default App;