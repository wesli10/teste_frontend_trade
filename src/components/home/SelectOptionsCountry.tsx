import { Select } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface SelectProps {
  contries: Array<{
    name: string;
    code: string;
    flag: string;
  }>;
  placeholder: string;
  selected?: string;
  onSelectChanged: (selected: string) => void;
}

export function SelectOptionsCountry(props: SelectProps) {
  function handleSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
    props.onSelectChanged(e.target.value);
  }

  return (
    <Select
      colorScheme="orange.500"
      color="orange.200"
      placeholder={props.placeholder}
      onChange={handleSelectChanged}
      key={""}
    >
      {props.contries.map((country) => (
        <>
          <option color="orange.200" key={country.code} value={country.name}>
            {country.code} - {country.name}
          </option>
        </>
      ))}
    </Select>
  );
}
