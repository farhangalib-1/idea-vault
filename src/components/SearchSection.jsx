"use client";
import { ChevronDown } from "@gravity-ui/icons";
import { Button, Dropdown, Header, Label, SearchField } from "@heroui/react";
import { useState } from "react";
import React from 'react'

const SearchSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="flex justify-center items-center mt-6 gap-2 p-6">
      <div >
    <SearchField name="search">
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[180px] md:w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
      </div>
      <div>
        <Dropdown>
      <Button aria-label="Menu" className="bg-white/30 backdrop-blur-xl shadow-lg" variant="outline" color="primary">
        All Categories
        <ChevronDown className="w-4 h-4" />
      </Button>
      <Dropdown.Popover className="min-w-[256px]">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={setSelected}
        >
          <Dropdown.Section>
            <Header>Select a catagory</Header>
            <Dropdown.Item id="ai" textValue="AI">
              <Dropdown.ItemIndicator />
              <Label>AI</Label>
            </Dropdown.Item>
            <Dropdown.Item id="tech" textValue="Tech">
              <Dropdown.ItemIndicator />
              <Label>Tech</Label>
            </Dropdown.Item>
            <Dropdown.Item id="health" textValue="Health">
              <Dropdown.ItemIndicator />
              <Label>Health</Label>
            </Dropdown.Item>
          </Dropdown.Section>
          <Dropdown.Item id="Education" textValue="Education">
            <Dropdown.ItemIndicator />
            <Label>Education</Label>
          </Dropdown.Item>
          <Dropdown.Item id="Environment" textValue="Environment">
            <Dropdown.ItemIndicator />
            <Label>Environment</Label>
          </Dropdown.Item>
          <Dropdown.Item id="Agriculture" textValue="Agriculture">
            <Dropdown.ItemIndicator />
            <Label>Agriculture</Label>
          </Dropdown.Item>
          <Dropdown.Item id="Community" textValue="Community">
            <Dropdown.ItemIndicator />
            <Label>Community</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
      </div>
       </div>
    </div>
  )
}

export default SearchSection
