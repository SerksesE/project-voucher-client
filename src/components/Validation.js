import * as React from 'react';

export default function Validation(props) {
  console.log(props)
  return (
    <div>
      <div>
        <button onClick={() => props.toggleDisplay()}>Use</button>
      </div>
      <div>
        {props.renderBarcode()}
      </div>
    </div>
  )
}