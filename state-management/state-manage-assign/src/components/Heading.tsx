import * as React from 'react';
import { Typography } from '@mui/material';
import './Heading.css';

// interface TextProps() {
//     label : string,
// }

// export default function Text({label}:TextProps) {
//     return (
//         <Typography className='candidate-info' >{label}</Typography>
//     );
// }

export interface TextProps {
    // type : 'checkbox'
    // cls : string
    level : string
}
  
const Text = ({ level }:TextProps) => {
    const txt = level;
    return (
        <Typography className='candidate-info'>{txt}</Typography>
    )
}

export default Text;