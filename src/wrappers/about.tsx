import * as M from '../pages/about'
function pick(mod:any){
  const keys = ['About','about','AboutPage','aboutPage','Default','default','Page','Component','Main','Index']
  for (const k of keys) if ((mod as any)[k]) return (mod as any)[k]
  for (const k of Object.keys(mod)) if (typeof (mod as any)[k] === 'function') return (mod as any)[k]
  return () => <div>About ページが見つかりません</div>
}
const Comp = pick(M)
export default function About(){ return <Comp/> }
