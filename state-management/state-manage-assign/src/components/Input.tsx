import * as React from 'react';
// import SearchIcon from '@mui/icons-material';

// import rows from './Table'

export interface InputProps {
    text : 'Input'
} 

// const rows = [
//     createData('John Smith', '-', 'CLEAR', 'Barrouallie', '2/22/2022'),
//     createData('Serene', '-', 'CLEAR', 'Vanrsborg', '3/13/2022'),
//     createData('Walsh', '-', 'CONSIDER', 'Sukamanah', '7/2/2022'),
//     createData('Maurizia', '-', 'CLEAR', 'Sukamanah', '2/20/2022'),
//     createData('GKendre', '-', 'CLEAR', 'Beutong Ateuh', '5/19/2022'),
// ];


function Search() {
    let inp = window.document.getElementById('myInput');
    console.log(inp?.nodeValue);

} 

export default function Input({text} : InputProps) {
    const textType = text;
    return (
        <div>
            <input type={textType} placeholder='Search by name' id='myInput' onChange={Search}>
                {/* <SearchIcon></SearchIcon> */}
            </input>
        </div>
    );

}
