import Lst from "./Lst.jsx"
import Countwrap from "./count.jsx";

function App(){
  return(
    <>
    <Lst></Lst>
    <Countwrap>
      {({count,setcount})=><lst count={count} setcount={setcount}/>}
    </Countwrap>
  </>
  )

}
export default App;