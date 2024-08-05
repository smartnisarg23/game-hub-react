import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement color="gray.300" children={<BsSearch />} />
        <Input
          ref={searchRef}
          placeholder="Search games..."
          variant="filled"
          borderRadius={10}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
