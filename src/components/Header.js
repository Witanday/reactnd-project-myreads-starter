import React from 'react'
import {Link}  from 'react-router-dom'
import { Header,  Dropdown}  from 'semantic-ui-react'

const tagOptions = [
    {
        key: 'current',
        text: 'CurrentReading',
      },
      {
        key: 'want',
        text: 'Want to read',
      },
      {
        key: 'Read',
        text: 'Read',
      },

      

]
export default function HeaderTop() {
    return (
        <Header className='header'>
            <h2 className='header__title'>My Reading</h2>
            <Dropdown
            direction="left"
            className='header__dropdown'
            icon='bars'>
            <Dropdown.Menu  className='dropdown__menu'>
            {tagOptions.map((option)=>(
                <Dropdown.Item key={option.key}>
                <Link key={option.key} className='dropdown__item' to={option.key}>{option.text}</Link>
                </Dropdown.Item>
            ))}
            </Dropdown.Menu>
            
            
            </Dropdown>
            
        </Header>
    )
}
