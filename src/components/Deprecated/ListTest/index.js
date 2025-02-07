import React, { useState } from 'react'
import TraditionalList from './List1'
import RefList from './List2'
import CompositionList from './List3'
import styles from './ListTest.module.scss'

const STATUS = {
  TRADITION: 'tradition',
  REF: 'ref',
  COMPOSITION: 'composition',
}

const List = ({ status }) => {
  switch (status) {
    case STATUS.TRADITION:
      return <TraditionalList />
    case STATUS.REF:
      return <RefList />
    case STATUS.COMPOSITION:
      return <CompositionList />
    default:
      break
  }
}

export default function ListContainer() {
  const [state, setState] = useState(STATUS.TRADITION)

  return (
    <div className={styles['list-main-container']}>
      <div>
        <button className={state === STATUS.TRADITION ? styles.active : ''} onClick={() => setState(STATUS.TRADITION)}>
          TraditionalList
        </button>
        <button className={state === STATUS.REF ? styles.active : ''} onClick={() => setState(STATUS.REF)}>
          RefList
        </button>
        <button
          className={state === STATUS.COMPOSITION ? styles.active : ''}
          onClick={() => setState(STATUS.COMPOSITION)}
        >
          CompositionList
        </button>
      </div>
      <List status={state} />
    </div>
  )
}
