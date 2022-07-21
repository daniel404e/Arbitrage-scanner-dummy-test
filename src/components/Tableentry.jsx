import React, {useEffect, useState} from 'react';


function Tableentry(props) {
    return (

                 <tr >


                        <td>{props.vals[0]}</td>
                        <td>{props.vals[1]}</td>
                        <td>{props.vals[2]}</td>
                         
                        
                 </tr>

          );
}


export default Tableentry;