import Button from '@pluralsight/ps-button/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './app.module.css'

export default styleable(css)(props =>
  <div className={props.css.app}>
    <header>
      <h3>Pluralsight Design System</h3>
      <h2>React Style Overrides Example</h2>
    </header>
    <div className={props.css.box}>
      <Button>
        The Style Guide standard
      </Button>
    </div>
    <div className={props.css.box}>
      <Button css={{ 'ps-button': props.css.buttonOverrideStyleable }}>
        Override everything with react-stylable
      </Button>
    </div>
    <div className={props.css.box}>
      <Button css={{ 'ps-button': props.css.buttonComposesStyleable }}>
        Compose with react-stylable
      </Button>
    </div>
    <div className={props.css.box}>
      <Button className={props.css.buttonComposeClassName}>
        Composes with className
      </Button>
    </div>
  </div>
)