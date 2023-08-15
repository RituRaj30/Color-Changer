const Content3 = ({colorValue,setColorValue}) => {
   

  return (
    <form className>
        <input
        autoFocus
        type="text"
        className="search"
        placeholder="Enter color name"
        required
        value={colorValue}
        onChange={(e)=>setColorValue(e.target.value)}
        />

    </form>
  )
}

export default Content3