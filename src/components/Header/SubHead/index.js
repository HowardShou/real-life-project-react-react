import { useState, useEffect } from 'react'
import Grow from '@material-ui/core/Grow'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import config from './config'
import PATHES from 'constants/pathes'

const useStyles = makeStyles({
  btnGroup: {
    width: '80%',
  },
})

const SubHead = () => {
  const [demoChecked, setDemoChecked] = useState(false)
  const [transitionDemoChecked, setTransitionDemoChecked] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()

  useEffect(() => {
    let id = null
    if (location.pathname !== PATHES.ONLINE_DEMOS) {
      setDemoChecked(true)
      setTransitionDemoChecked(true)
    } else {
      setTransitionDemoChecked(false)
      id = setTimeout(() => {
        //wait for transition over then destroy DOM
        setDemoChecked(false)
      }, 500)
    }
    return () => {
      clearTimeout(id)
    }
  }, [location.pathname])

  return (
    <>
      {demoChecked ? (
        <Grow in={transitionDemoChecked} {...(transitionDemoChecked ? { timeout: 500 } : { timeout: 500 })}>
          <Box display='flex' justifyContent={matches ? 'center' : 'flex-end'} bgcolor='common.black'>
            <ButtonGroup
              orientation={matches ? 'vertical' : 'horizontal'}
              size='small'
              variant='contained'
              color='default'
              aria-label='text primary button group'
              className={matches ? classes.btnGroup : null}
            >
              {config.map((item, idx) => {
                return (
                  <Button key={idx} onClick={() => history.push(item.path)}>
                    {item.title}
                  </Button>
                )
              })}
            </ButtonGroup>
          </Box>
        </Grow>
      ) : null}
    </>
  )
}

export default SubHead
