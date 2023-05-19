import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface SelectProps {
  seasons: Array<number>;
  placeholder: string;
  selected?: string;
  onSelectChanged: (selected: string) => void;
}

export function SelectOptionsSeason(props: SelectProps) {
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
      {props.seasons.map((season) => (
        <>
          <option color="orange.200" key={season} value={season}>
            {season}
          </option>
        </>
      ))}
    </Select>
  );
}
