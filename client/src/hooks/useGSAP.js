import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsap';

/**
 * useGSAP — provides a GSAP context that is automatically reverted on unmount.
 * @param {function} fn - callback that receives gsap context
 * @param {Array}   deps - dependency array
 */
const useGSAP = (fn, deps = []) => {
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = gsap.context(fn);
    return () => ctx.current?.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useGSAP;
