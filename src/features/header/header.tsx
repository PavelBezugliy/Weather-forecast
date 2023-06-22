import React from 'react'

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <div className="form-check form-switch">
        <h5>Прогноз погоды</h5>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Включить серую тему</label>
      </div>
    </div>
  )
}

export default Header