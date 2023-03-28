

// // import * as React from 'react';

// // import Button from '@mui/material/Button';
// // import ClickAwayListener from '@mui/material/ClickAwayListener';
// // import Grow from '@mui/material/Grow';
// // import Paper from '@mui/material/Paper';
// // import Popper from '@mui/material/Popper';
// // import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// // import Stack from '@mui/material/Stack';
// // import FilterListIcon from '@mui/icons-material/FilterList';
// // import { Divider } from '@mui/material';
// // import Checkbox from './Checkbox'
// import Checkbox from '@mui/material/Checkbox';
// import { MenuItem } from '@mui/material';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import TableRow from '@mui/material/TableRow';
// // import Button from '@mui/material/Button'
// import React, { useState, useEffect } from "react";
// import { Select } from "@mui/material";
// // import  { , useEffect, useState } from 'react'

// import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Chip from '@mui/material/Chip';
// // import './Table.css';
// import Text from './Heading';
// import MenuListComposition from './Filter'
// import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
// import AddIcon from '@mui/icons-material/Add';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Popper from '@mui/material/Popper';
// import Stack from '@mui/material/Stack';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import Button from '@mui/material/Button'
// import './Table.css'
// import './Filter';
// import filteredData from './Filter';
// import Filter from './Filter';
// // import Tab from './RenderTable'

// function createData(
//   name: string,
//   adjudication: string,
//   status: string,
//   location: string,
//   date: string,
// ) {
//   return { name, adjudication, status, location, date };
// }

// const rows = [
//   createData('John Smith', '-', 'CLEAR', 'Barrouallie', '2/22/2022'),
//   createData('Serene', '-', 'CLEAR', 'Vanrsborg', '3/13/2022'),
//   createData('Walsh', '-', 'CONSIDER', 'Sukamanah', '7/2/2022'),
//   createData('Maurizia', '-', 'CLEAR', 'Sukamanah', '2/20/2022'),
//   createData('Kendre', '-', 'CLEAR', 'Beutong Ateuh', '5/19/2022'),
//   createData('Erastus', '-', 'CLEAR', 'Hoviyn Am', '5/19/2022'),
//   createData('Jereme', '-', 'CONSIDER', 'Sharingol', '5/19/2022'),
//   createData('John Smith', '-', 'CONSIDER', 'Lianyun', '5/19/2022'),
//   createData('Cari', '-', 'CLEAR', 'Taboao da Serra', '5/19/2022'),
//   createData('Kimble', '-', 'CONSIDER', 'Veseli nad Moravou', '5/19/2022'),

// ];


// export default function BasicTable() {

//   const [flag, setFlag] = useState<boolean>(false);

//   // const handleButtonClick = () => {
//   //   setFlag(!flag);
//   // }
//   // const handleButtonClick = useCallback(() => {
//   //   window.alert('redirect to forgot password page')
//   //   setFlag((prevFlag )=> !prevFlag);
//   // }, [])

//   const [searchQuery, setSearchQuery] = React.useState('');

  
//   // const prevOpen = React.useRef(open);
//   // React.useEffect(() => {
//   //   if (prevOpen.current === true && open === false) {
//   //     anchorRef.current!.focus();
//   //   }

//   //   prevOpen.current = open;
//   // }, [open]);
//   // const exactMatch = filteredRows.find(
//   //   (row) => row.name.toLowerCase() === searchQuery.toLowerCase()
//   // );
  
//   // if (exactMatch) {
//   //   filteredRows.splice(filteredRows.indexOf(exactMatch), 1);
//   //   // filteredRows.unshift(exactMatch);
//   // }
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);
//   const filteredRows = rows.filter((row) => 
//     row.name.toLowerCase().includes(searchQuery.toLowerCase()),
//     // setFlag(!flag),
//     // handleButtonClick()
    
//   );
//   const [filteredData, setFilteredData] = useState(rows);
//   const [stat, setStat] = useState("All");
//   useEffect(() => {
//     if (stat === "All") {
//       setFilteredData(rows);
//       // filteredData = filteredRows;
//     } else if (stat === "CLEAR" || stat === "CONSIDER") {
//       setFilteredData(rows.filter((dt) => dt.status === stat));
//     } else {
//       setFilteredData(rows.filter((dt) => dt.adjudication === stat));
//     }
//     /*setFilteredData(
//       stat === "All" ? rows : rows.filter((dt) => dt.status === stat)
//     );*/
//   }, [stat]);

  
//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event | React.SyntheticEvent) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event: React.KeyboardEvent) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   // const prevOpen = React.useRef(open);
//   // React.useEffect(() => {
//   //   if (prevOpen.current === true && open === false) {
//   //     anchorRef.current!.focus();
//   //   }

//   //   prevOpen.current = open;
//   // }, [open]);

//   return (
//     <div>
      
//       <div className='header-top'>
//         <Text level={'Candidates'}></Text>
//         <div >
//         <Button className='button' variant="outlined" startIcon={<SystemUpdateAltIcon />} style={{borderColor: 'black', color : 'black', margin : '15px'}}>
//           Export
//         </Button>
//         <Button className='button' variant="contained" startIcon={<AddIcon />}>
//           Manual Order
//         </Button>
//         {/* <button><SystemUpdateAltIcon></SystemUpdateAltIcon>Export</button> */}
//         {/* <button id='manual'><AddIcon></AddIcon>Manual Order</button> */}
//         </div>
        
//     </div>
//     <Paper className='parentCont' style={{borderRadius:'20px'}}>
//       <div className='header'>
//         <Text level={'Candidate Information'}></Text>
//         {/* <div> */}
//         <TextField
//           label="Search by Name"
//           value={searchQuery}
//           onChange={(e) => { setSearchQuery(e.target.value); setFlag((prevFlag )=> !prevFlag);}}
//           sx = {{width : '30%', height : '25px' }}
//         />
//         {/* <MenuListComposition></MenuListComposition> */}
//         {/* <Button  variant="contained" startIcon={<FilterListIcon />}>
//         <Filter></Filter>  Filter
//         </Button> 
//          */}
//         <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//         {/* <div className='Filter'> */}
        
//         <Button variant="outlined" startIcon={<FilterListIcon />} style={{borderColor: 'black', color : 'black', margin : '10px'}}>Filter</Button>
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 {/* <ClickAwayListener onClickAway={handleClose}> */}
//                   {/* <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
                    
                    
//                   > */}
                    
//                     <Select
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       onKeyDown={handleListKeyDown}
//                       value={stat}
//                       onChange={(e) => setStat(e.target.value)}
//                     > 
//                     <MenuItem>Status</MenuItem>
//                       <MenuItem value={"All"}>
//                         <Checkbox name="All1" />
//                         All
//                       </MenuItem>
//                       <MenuItem value={"CLEAR"}>
//                         <Checkbox name="Clear" />
//                         Clear
//                       </MenuItem>
//                       <MenuItem value={"CONSIDER"}>
//                         <Checkbox name="Consider" />Consider
//                       </MenuItem>
//                     <MenuItem>Adjudiction</MenuItem>
//                     <MenuItem value={"All"}>
//                       <Checkbox name="All2" />
//                       All
//                     </MenuItem>
//                     <MenuItem value={"Engaged"}>
//                       <Checkbox name="Engaged" />
//                       Engaged
//                     </MenuItem>
//                     <MenuItem value={"Pre Adverse Action"}>
//                       <Checkbox name="Pre Adverse Action" />
//                       Pre Adverse Action
//                     </MenuItem>
//                     </Select>
//                    {/* </MenuList>  */}

//                 {/* </ClickAwayListener> */}
//               </Paper>
//             </Grow>
//           )}
//         </Popper> 
                

//         <Button className='button' variant="outlined" startIcon={<MoreVertIcon />} 
//         style={{height:'36px', width:'10px', padding : '0', marginTop: '0px', borderColor: 'black', color : 'black'}}> 
//         </Button>
//         </div>
//         {/* </div> */}
//         {/* <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={stat}
//           onChange={(e) => setStat(e.target.value)}
//         >
//         <MenuItem>Status</MenuItem>
//           <MenuItem value={"All"}>
//             <Checkbox name="All1" />
//             All
//           </MenuItem>
//           <MenuItem value={"CLEAR"}>
//             <Checkbox name="Clear" />
//             Clear
//           </MenuItem>
//           <MenuItem value={"CONSIDER"}>
//             <Checkbox name="Consider" />Consider
//           </MenuItem>
//         <MenuItem>Adjudiction</MenuItem>
//         <MenuItem value={"All"}>
//           <Checkbox name="All2" />
//           All
//         </MenuItem>
//         <MenuItem value={"Engaged"}>
//           <Checkbox name="Engaged" />
//           Engaged
//         </MenuItem>
//         <MenuItem value={"Pre Adverse Action"}>
//           <Checkbox name="Pre Adverse Action" />
//           Pre Adverse Action
//         </MenuItem>
//         </Select> */}
        
//         {/* </div>         */}
        
//       </div>
      
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead className='table-headings'>
//             <TableRow>
//               <TableCell>NAME</TableCell>
//               <TableCell align="right">ADJUDICATION</TableCell>
//               <TableCell align="right">STATUS</TableCell>
//               <TableCell align="right">LOCATION</TableCell>
//               <TableCell align="right">DATE</TableCell>
//             </TableRow>
//           </TableHead>
//           {flag ? (
//             <TableBody>
//               {filteredRows.map((row) => (
//                 <TableRow
//                   // key={row.name}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row" style={{color:'blue'}}>
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.adjudication}</TableCell>
//                   <TableCell align="right">
//                     {/* {row.status} */}
//                     <Chip variant={'outlined'} label={row.status} color={row.status === 'CLEAR' ? 'success' : 'warning'}
//                     style={{backgroundColor: row.status === 'CLEAR' ? '#F2F4FC' : '#FAF8EB', borderRadius: 0, border : 0, } } />
//                   </TableCell>                  <TableCell align="right">{row.location}</TableCell>
//                   <TableCell align="right">{row.date}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//             ) : (
//             <TableBody>
//               {filteredData.map((row) => (
//                 <TableRow
//                   // key={row.name}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row" style={{color:'blue'}}>
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.adjudication}</TableCell>
//                   <TableCell align="right">
//                     {/* {row.status} */}
//                     <Chip variant={'outlined'} label={row.status} color={row.status === 'CLEAR' ? 'success' : 'warning'}
//                     style={{backgroundColor: row.status === 'CLEAR' ? '#F2F4FC' : '#FAF8EB', borderRadius: 0, border : 0, } } />
//                   </TableCell>                  <TableCell align="right">{row.location}</TableCell>
//                   <TableCell align="right">{row.date}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           )} 

         
//         </Table>
//        </TableContainer>
//      </Paper>
//     </div>
//   );
// }
// function useCallback(arg0: () => void, arg1: never[]) {
//   throw new Error('Function not implemented.');
// }




// import * as React from 'react';

// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { Divider } from '@mui/material';
// import Checkbox from './Checkbox'
import Checkbox from '@mui/material/Checkbox';
import Menu from '@mui/material/Menu';

import { MenuItem } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button'
import React, { useState, useEffect } from "react";
import { Select } from "@mui/material";
// import  { , useEffect, useState } from 'react'

import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
// import './Table.css';
import Text from './Heading';
import MenuListComposition from './Filter'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import AddIcon from '@mui/icons-material/Add';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button'
import './Table.css'
import './Filter';
import filteredData from './Filter';
import Filter from './Filter';
// import Tab from './RenderTable'

function createData(
  name: string,
  adjudication: string,
  status: string,
  location: string,
  date: string,
) {
  return { name, adjudication, status, location, date };
}

const rows = [
  createData('John Smith', '-', 'CLEAR', 'Barrouallie', '2/22/2022'),
  createData('Serene', '-', 'CLEAR', 'Vanrsborg', '3/13/2022'),
  createData('Walsh', '-', 'CONSIDER', 'Sukamanah', '7/2/2022'),
  createData('Maurizia', '-', 'CLEAR', 'Sukamanah', '2/20/2022'),
  createData('Kendre', '-', 'CLEAR', 'Beutong Ateuh', '5/19/2022'),
  createData('Erastus', '-', 'CLEAR', 'Hoviyn Am', '5/19/2022'),
  createData('Jereme', '-', 'CONSIDER', 'Sharingol', '5/19/2022'),
  createData('John Smith', '-', 'CONSIDER', 'Lianyun', '5/19/2022'),
  createData('Cari', '-', 'CLEAR', 'Taboao da Serra', '5/19/2022'),
  createData('Kimble', '-', 'CONSIDER', 'Veseli nad Moravou', '5/19/2022'),

];


export default function BasicTable() {
  const [flag, setFlag] = useState<boolean>(false);

  // const handleButtonClick = () => {
  //   setFlag(!flag);
  // }
  // const handleButtonClick = useCallback(() => {
  //   window.alert('redirect to forgot password page')
  //   setFlag((prevFlag )=> !prevFlag);
  // }, [])

  const [searchQuery, setSearchQuery] = React.useState('');

  
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);
  // const exactMatch = filteredRows.find(
  //   (row) => row.name.toLowerCase() === searchQuery.toLowerCase()
  // );
  
  // if (exactMatch) {
  //   filteredRows.splice(filteredRows.indexOf(exactMatch), 1);
  //   // filteredRows.unshift(exactMatch);
  // }
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const filteredRows = rows.filter((row) => 
    row.name.toLowerCase().includes(searchQuery.toLowerCase()),
    // setFlag(!flag),
    // handleButtonClick()
    
  );
  const [filteredData, setFilteredData] = useState(rows);
  const [stat, setStat] = useState("All");
  useEffect(() => {
    if (stat === "All") {
      setFilteredData(rows);
      // filteredData = filteredRows;
    } else if (stat === "CLEAR" || stat === "CONSIDER") {
      setFilteredData(rows.filter((dt) => dt.status === stat));
    } else {
      setFilteredData(rows.filter((dt) => dt.adjudication === stat));
    }
    /*setFilteredData(
      stat === "All" ? rows : rows.filter((dt) => dt.status === stat)
    );*/
  }, [stat]);

  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // const handleClose = (event: Event | React.SyntheticEvent) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const toTitleCase = (str: string) => {
  //   return str.replace(/\w\S*/g, function(txt: string){return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
  // }
  

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);
  // const [flag, setFlag] = useState<boolean>(false);

  // // const handleButtonClick = () => {
  // //   setFlag(!flag);
  // // }
  // // const handleButtonClick = useCallback(() => {
  // //   window.alert('redirect to forgot password page')
  // //   setFlag((prevFlag )=> !prevFlag);
  // // }, [])

  // const [searchQuery, setSearchQuery] = React.useState('');

  
  // // const prevOpen = React.useRef(open);
  // // React.useEffect(() => {
  // //   if (prevOpen.current === true && open === false) {
  // //     anchorRef.current!.focus();
  // //   }

  // //   prevOpen.current = open;
  // // }, [open]);
  // // const exactMatch = filteredRows.find(
  // //   (row) => row.name.toLowerCase() === searchQuery.toLowerCase()
  // // );
  
 
  return (
    <div>
      
      <div className='header-top'>
        <Text level={'Candidates'}></Text>
        <div >
        
        <Button className='button' variant="outlined" startIcon={<SystemUpdateAltIcon />} 
          style={{borderColor: '#696A6E', color : '#696A6E', margin : '15px', textTransform:"none"}}
          
          >
          Export
        </Button>
        
        <Button className='button' variant="contained" startIcon={<AddIcon />}
          style={{ color: '#FFF',borderColor: 'blue', textTransform:"none"}}>
          Manual Order
        </Button>
        
        </div>
        
    </div>
    <Paper className='parentCont' style={{borderRadius:'20px'}}>
    <div className='header'>
        <Text level={'Candidate Information'}></Text>
        {/* <div> */}
        <TextField
          label="Search by Name"
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setFlag((prevFlag )=> !prevFlag);}}
          sx = {{width : '30%', height : '25px' }}
        />
        {/* <MenuListComposition></MenuListComposition> */}
        {/* <Button  variant="contained" startIcon={<FilterListIcon />}>
        <Filter></Filter>  Filter
        </Button> 
         */}
        <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Button variant="outlined" startIcon={<FilterListIcon />} 
            style={{borderColor: '#E5E7ED', color : 'black', margin : '10px'}}
            >
              Filter</Button>
          
        </Button>
        <Menu
          id="demo-positioned-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onKeyDown={handleListKeyDown}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          // getContentAnchorEl={null}
        > 
          <MenuItem> Filters </MenuItem>
          <hr></hr>
          {/* <Divider/> */}
          <MenuItem> Status </MenuItem>
          <MenuItem onClick={() => setStat('All')}>
            <Checkbox checked={stat === 'All'} />All
          </MenuItem>
          <MenuItem onClick={() => setStat('CLEAR')}>
            <Checkbox checked={stat === 'CLEAR'} />Clear
          </MenuItem>
          <MenuItem onClick={() => setStat('CONSIDER')}>
            <Checkbox checked={stat === 'CONSIDER'} />Consider
          </MenuItem>
          <MenuItem> Ajudication </MenuItem>
          <MenuItem onClick={() => setStat('All2')}>
            <Checkbox checked={stat === 'All2'} />All
          </MenuItem>
          <MenuItem onClick={() => setStat('Engaged')}>
            <Checkbox checked={stat === 'Engaged'} />Engaged
          </MenuItem>
          <MenuItem onClick={() => setStat('Pre adverse action')}>
            <Checkbox checked={stat === 'Pre adverse action'} />Pre adverse action
          </MenuItem>
        </Menu>
        

        <Button className='MuiButtonBase-root' variant="outlined"
        style={{minHeight:'36px', minWidth:'10px', padding : '0', marginTop: '0px', borderColor: '#E5E7ED', color : '#696A6E'}}>
          <MoreVertIcon style={{padding: '0'}} /> 
        </Button>
        </div>
        {/* </div> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stat}
          onChange={(e) => setStat(e.target.value)}
        >
        <MenuItem>Status</MenuItem>
          <MenuItem value={"All"}>
            <Checkbox name="All1" />
            All
          </MenuItem>
          <MenuItem value={"CLEAR"}>
            <Checkbox name="Clear" />
            Clear
          </MenuItem>
          <MenuItem value={"CONSIDER"}>
            <Checkbox name="Consider" />Consider
          </MenuItem>
        <MenuItem>Adjudiction</MenuItem>
        <MenuItem value={"All"}>
          <Checkbox name="All2" />
          All
        </MenuItem>
        <MenuItem value={"Engaged"}>
          <Checkbox name="Engaged" />
          Engaged
        </MenuItem>
        <MenuItem value={"Pre Adverse Action"}>
          <Checkbox name="Pre Adverse Action" />
          Pre Adverse Action
        </MenuItem>
        </Select> */}
        
        {/* </div>         */}
        
      </div>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='table-headings'>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">ADJUDICATION</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">LOCATION</TableCell>
              <TableCell align="right">DATE</TableCell>
            </TableRow>
          </TableHead>
          {flag ? (
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{color:'blue'}}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.adjudication}</TableCell>
                  <TableCell align="right">
                    {/* {row.status} */}
                    <Chip variant={'outlined'} label={row.status} color={row.status === 'CLEAR' ? 'success' : 'warning'}
                    style={{backgroundColor: row.status === 'CLEAR' ? '#F2F4FC' : '#FAF8EB', borderRadius: 0, border : 0, } } />
                  </TableCell>                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            ) : (
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{color:'blue'}}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.adjudication}</TableCell>
                  <TableCell align="right">
                    {/* {row.status} */}
                    <Chip variant={'outlined'} label={row.status} color={row.status === 'CLEAR' ? 'success' : 'warning'}
                    style={{backgroundColor: row.status === 'CLEAR' ? '#F2F4FC' : '#FAF8EB', borderRadius: 0, border : 0, } } />
                  </TableCell>                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )} 

         
        </Table>
       </TableContainer>
     </Paper>
    </div>
  );
}
function useCallback(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}


