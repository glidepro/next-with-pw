function IndexPage() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px'}}>
      <div style={{ gridRowStart: 1, gridColumnStart: 1, height: '100px', backgroundColor: 'red'}}>
        <h1 style={{ fontFamily: "'Merriweather', serif"}}>Groovy...</h1>
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 2, height: '100px', backgroundColor: 'red', filter: 'blur(5px) hue-rotate(90deg)' }}></div>
      <div style={{ gridRowStart: 2, gridColumnStart: 1, height: '100px', backgroundColor: 'red', filter: 'blur(10px) hue-rotate(180deg)'}}></div>
      <div style={{ gridRowStart: 2, gridColumnStart: 2, height: '100px', backgroundColor: 'red', filter: 'blur(15px) hue-rotate(270deg)'}}></div>
    </div>
  )
}

export default IndexPage
