import React, { Fragment, useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import ClassApi2 from '../api/API2'
import { useNavigate } from "react-router-dom";
export default function AutoComplete({ onChange, width }) {
  const [name, setName] = useState('')
  const [optionList, setOptionList] = useState([])
  useEffect(() => {
    if (name.length > 0) {
      ClassApi2.SearchProduct(name).then((response) => {
        setOptionList(response.data)
      })
    }
  }, [name])
  const navigate = useNavigate()

  const handleAutoCompleteChange = (event, value) => {
    if (value) {
      if (onChange) {
        onChange(event, value);
      } else {
        window.location.href = '/san-pham/chitietsanpham/' + value?.productid;
      }

    }
  }
  return (
    <Autocomplete
      disablePortal
      autoHighlight
      options={optionList}
      getOptionLabel={(option) => option.productname}
      onChange={handleAutoCompleteChange}
      sx={{
        "& .MuiAutocomplete-input": {
          fontSize: 16,
        },
        width: width ? width : 500,
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <div>
            <div style={{ width: '100%' }}>{option.productname}</div>
            <div style={{ color: 'green', fontSize: '0.8rem' }}>Loại hàng: {option.type}</div>
          </div>
        </Box>
      )}
      renderInput={(params) =>
        <TextField variant="standard" {...params} value={name} onChange={(e) => { setName(e.target.value) }} label="Tìm kiếm..." />

      }
    />
  );
}