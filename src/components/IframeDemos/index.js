import { useEffect, useCallback } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'

const iframeWidth = {
  width: '100%',
}

function ReadingProgressBar() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='dynamic-reading-progress-bar'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Dynamic Reading Progress Bar`}</Box>
      </Typography>
      <iframe
        height='640'
        style={iframeWidth}
        scrolling='no'
        title='dynamic progress bar depends on scroll height'
        src='https://codepen.io/Aksas/embed/RwGYXRE?height=640&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/RwGYXRE'>dynamic progress bar depends on scroll height</a> by
        HowardShou (<a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function DebounceThrottleDemo() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='debounce-and-throttle'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Debounce And Throttle`}</Box>
      </Typography>
      <iframe
        height='585'
        style={iframeWidth}
        scrolling='no'
        title='debounce and throttle'
        src='https://codepen.io/Aksas/embed/QWyYgyG?height=585&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/QWyYgyG'>debounce and throttle</a> by HowardShou (
        <a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function DynamicMarquee() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='dynamic-marquee'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Dynamic Marquee`}</Box>
      </Typography>
      <iframe
        height='500'
        style={iframeWidth}
        scrolling='no'
        title='Dynamic Marquee(controled by web animation api)'
        src='https://codepen.io/Aksas/embed/WNrzWKz?height=265&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen
      >
        See the Pen{' '}
        <a href='https://codepen.io/Aksas/pen/WNrzWKz'>Marquee control by js example(controled by web animation api)</a>
        by HowardShou (<a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function AccessCssVariable() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='access-css-variable'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Access CSS Variable in Valina JS`}</Box>
      </Typography>
      <iframe
        height='386'
        style={iframeWidth}
        scrolling='no'
        title='Access CSS Variable in Valina JS'
        src='https://codepen.io/Aksas/embed/BaQRJrO?height=386&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/BaQRJrO'>Access CSS Variable in Valina JS</a> by HowardShou (
        <a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function HighlightText() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='highlight-text'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Highlight Text (without dangerouslySetInnerHTML)`}</Box>
      </Typography>
      <iframe
        height='368'
        style={iframeWidth}
        scrolling='no'
        title='HighlightText ( without  dangerouslySetInnerHTML)'
        src='https://codepen.io/Aksas/embed/VwmzWYE?height=368&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/VwmzWYE'>HighlightText ( without dangerouslySetInnerHTML)</a>{' '}
        by HowardShou (<a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

const Iframes = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const a = document.body.appendChild(document.createElement('a'))
      a.href = location.hash
      a.click()
      document.body.removeChild(a)
    }
  }, [location.hash])

  return (
    <Box display='flex' width='100%' flexDirection='column' justifyContent='centerer'>
      <ReadingProgressBar />
      <DebounceThrottleDemo />
      <HighlightText />
      <DynamicMarquee />
      <AccessCssVariable />
    </Box>
  )
}

export default Iframes
