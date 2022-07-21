import React, {useEffect, useState} from 'react';

import Tableentry from './Tableentry'

function Table() {
    return (
     
  
      <div >
          <table>
                <thead>
                <tr>
                    <th>PUTS </th>
                    <th> STRIKE-PRICE </th>
                    <th> CALLS </th>
                     
                </tr>
                </thead>
                <tbody>
                     
                     <Tableentry vals={[21,22,23]}/>
                     
                        
                </tbody>
            </table>
      </div>
    );
  }
  
  export default Table;
  