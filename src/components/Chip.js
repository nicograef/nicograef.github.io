import React from 'react'

export default ({ text }) => (
  <>
    <span
      style={{
        background: '#dbe2ef',
        padding: '3px 6px',
        borderRadius: 3,
        marginRight: 6,
        whiteSpace: 'nowrap'
      }}
    >
      <small>{text}</small>
    </span>{' '}
  </>
)
