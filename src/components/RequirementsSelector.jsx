import React from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.9 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};

const options = [
  "Cheap",
  "Best",
  "Italian",
  "French",
  "Chinese",
  "Japanese",
  "Brazilian",
  "Spanish",
  "Mexican",
  "Greek",
  "Indian",
];

export default function RequirementsSelector({ values, setValues }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl className="input">
      <InputLabel id="requirements-label">What are you looking for?</InputLabel>
      <Select
        labelId="requirements-label"
        id="requirements"
        multiple
        value={values}
        onChange={handleChange}
        input={<OutlinedInput label="What are you looking for?" />}
        renderValue={(selected) => `${selected.join(", ")} restaurants nearby`}
        MenuProps={MenuProps}
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={values.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
