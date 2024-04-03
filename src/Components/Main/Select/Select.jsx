import React from 'react'
import "./Select.css"

function Select() {
  return (
    <div>
        <div className="select_container">
            <div className="select-parent-1">
                <div className="sellers-child">
                    <h3>Popular</h3>
                    <h2>Sellers</h2>
                </div>
                <div className="sellers-child">
                    <b>TIMEFRAME</b>
                    <select name="" id="">
                        <option value="">Today</option>
                        <option value="">Yesterday</option>
                        <option value="">Week</option>
                    </select>
                </div>
            </div>
            <div className="select-parent-2"></div>
        </div>
    </div>
  )
}

export default Select