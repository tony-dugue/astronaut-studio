// Pour utiliser GSAP avec locomotive scroll, on doit utiliser un proxy de scroll fourni par gsap.
// Le proxy va nous permettre de gérer les évènements de scroll et de les transmettre à GSAP.

import {useEffect} from 'react'
import {useLocomotiveScroll} from "react-locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerProxy = () => {

  const { scroll } = useLocomotiveScroll()  // 1) on récupère une instance de locomotive scroll
  gsap.registerPlugin(ScrollTrigger)  // 2) on enregistre le plugin scrollTrigger de GSAP

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el; // 3) on récupère l'élément du locomotive scroll, dans notre cas, c'est la div principale (app (main)
      scroll.on('scroll', ScrollTrigger.update) // 4) lors du scroll de locomotive, on met à jour scrollTrigger

      // 5) on peut maintenant utiliser le scroller proxy de GSAP pour gérer les évènements de scroll
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices
        // - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters,
        // we should pin things with position: fixed on mobile. We sense it by checking to see if there's a
        // transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform ? "transform" : "fixed"
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())
      ScrollTrigger.refresh()
    }
  }, [scroll]);

  return null
}

export default ScrollTriggerProxy

