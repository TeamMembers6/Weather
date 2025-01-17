import React from 'react'
export default function Gallery({data}){
    
        return (
            <div className="row1 m-5">
            {data.map((image) =><div key={image.id}>
            <div className="col-md-4 m-3 ">
            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
            alt={image.title}/>
            </div>
            </div>)}
            </div>
        )
    
}