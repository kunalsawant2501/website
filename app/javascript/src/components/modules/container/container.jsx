import React from 'react'
import cnames from 'classnames'
import './container.scss'

const Container = ({ className, children, id }) => {
  const clasess = cnames('container-wrapper--content py-4', className)

  return (
    <div id={id} className="container-wrapper">
      <div className={clasess}>
        {children}
     </div>
    </div>
  )
}

export default Container
