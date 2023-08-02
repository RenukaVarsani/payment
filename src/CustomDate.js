import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { IconButton } from '@material-ui/core';
import Calander from 'feather-icons-react';

// const CustomCalendarIcon = (props) => {
//     return (
//       <IconButton {...props}>
//         <Calander color="primary" />
//       </IconButton>
//     );
//   };
  

  const CustomDate = () => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          format="dd/MM/yyyy"
        //   value={selectedDate}
        //   onChange={handleDateChange}
        InputProps={{
          startAdornment: (
            <Calander/>
          ),
        }}
        />
      </MuiPickersUtilsProvider>
    );
  };

export default CustomDate;  
  
