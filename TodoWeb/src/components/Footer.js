import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p id="footer">
    
    {" "}
    <FilterLink filter="SHOW_ALL">
      <span id="filter">All</span>
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_ACTIVE">
      <span id="filter2">Active</span>
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_COMPLETED">
      <span id="filter3">Completed</span>
    </FilterLink>
  </p>
)

export default Footer
