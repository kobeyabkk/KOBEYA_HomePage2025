import * as M from '../pages/home'
function pick(mod:any){
  const keys = ['Home','home','HomePage','homePage','Default','default','Page','Component','Main','Index']
  for (const k of keys) if ((mod as any)[k]) return (mod as any)[k]
  for (const k of Object.keys(mod)) if (typeof (mod as any)[k] === 'function') return (mod as any)[k]
  return () => <div>Home ページが見つかりません</div>
}
const Comp = pick(M)
export default function Home(){ return <Comp/> }
