const Content2 = ({colorValue}) => {
  return (
    <div className="rect"  style={{backgroundColor:colorValue
    }}>
        <p>{colorValue?colorValue:' color name'}</p>

    </div>
  )
}

export default Content2