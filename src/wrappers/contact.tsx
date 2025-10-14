import * as M from '../pages/contact'
function pick(mod:any){
  const keys = ['Contact','contact','ContactPage','contactPage','Default','default','Page','Component','Main','Index']
  for (const k of keys) if ((mod as any)[k]) return (mod as any)[k]
  for (const k of Object.keys(mod)) if (typeof (mod as any)[k] === 'function') return (mod as any)[k]
  return () => <div>Contact ページが見つかりません</div>
}
const Comp = pick(M)
export default function Contact(){ return <Comp/> }
