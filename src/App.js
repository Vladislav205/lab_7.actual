import './App.css'
import {Carousel} from './components/Carousel.js'

export default function App() {
  return (
    <div className="app__main-container">
      <Carousel infinite>
        
          
      <div className="item item-1"><img src={require('./images/Без_названия-removebg-preview.png')} /></div>
      <div className="item item-2"><img src={require('./images/imgonline-com-ua-Resize-mDt0AU4h1XtqjQ2-removebg-preview.png')} /></div>
      <div className="item item-3"><img src={require('./images/face-removebg-preview.png')} /></div>
      <div className="item item-4"><img src={require('./images/1558007292_discord-removebg-preview.png')} /></div>
      <div className="item item-5"><img src={require('./images/spotify_icon.jpg')} /></div>
      <div className="item item-6"><img src={require('./images/Без_названия-removebg-preview.png')} /></div>
      <div className="item item-7"><img src={require('./images/imgonline-com-ua-Resize-mDt0AU4h1XtqjQ2-removebg-preview.png')} /></div>
      <div className="item item-8"><img src={require('./images/face-removebg-preview.png')} /></div>
      <div className="item item-9"><img src={require('./images/1558007292_discord-removebg-preview.png')} /></div>
      <div className="item item-10"><img src={require('./images/spotify_icon.jpg')} /></div>
      

          

        
      </Carousel>
    </div>
  )
}
