import * as M from '../pages/courses'
function pick(mod:any){
  const keys = ['Courses','courses','CoursesPage','coursesPage','Default','default','Page','Component','Main','Index']
  for (const k of keys) if ((mod as any)[k]) return (mod as any)[k]
  for (const k of Object.keys(mod)) if (typeof (mod as any)[k] === 'function') return (mod as any)[k]
  return () => <div>Courses ページが見つかりません</div>
}
const Comp = pick(M)
export default function Courses(){ return <Comp/> }
