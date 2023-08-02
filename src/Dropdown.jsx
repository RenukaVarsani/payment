import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AlertCircle, Box, CheckCircle, Disc } from "react-feather";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const MenuProps = {
  PaperProps: {},
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth
    
        
        >
        <Select
          multiple
          sx={{height:"51px"}}
          displayEmpty
          value={personName}
          IconComponent={KeyboardArrowDownIcon}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>Select Status</Typography>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem>
           <Disc color="#FF9F31" style={{ paddingRight:"19px"}} /> Pending
          </MenuItem>
          <MenuItem>
            <AlertCircle color="#FF5F63" style={{ paddingRight:"19px"}} /> Failed
          </MenuItem>
          <MenuItem>
            <CheckCircle color="#00BF6F" style={{ paddingRight:"19px"}}  />  Done
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
