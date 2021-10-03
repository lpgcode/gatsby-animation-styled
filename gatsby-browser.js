import "./src/components/styles/Global.css"
import anime from 'animejs/lib/anime.es.js';

export const onClientEntry = () => {
    window.onload = () => { 
        
        console.log("loading app...");

        anime({
            targets: 'body',
            opacity: 1,

            duration: 2000,
    
            easing: 'linear',
          })
    
        console.log("animations are up...")
    }
  }



// apperently this is how you work with window events in gatsby to avoid SSR issues