import { ActionIcon, Select } from '@mantine/core'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchbar = () => {
  return (
    <div>
    <div style={{ maxWidth: 350,  alignItems: "center", padding: "0px", paddingTop: "23px" }}>
        <h1 style={{ display: "flex", justifyContent: "center", }}>Search</h1>
    </div>
    <Select searchable nothingFound="No related courses" fz={18} w={350} radius={"md"} variant='filled' pl={30}
              placeholder='Search course'
              icon={<ActionIcon><BiSearch /></ActionIcon>} data={["react", "Js"]}
            // {data.map((option) => {
            //   return {
            //     value: option.value,
            //     label: option.course_name,
            //   };
            // })} 
    />
    </div>
  )
}

export default Searchbar
