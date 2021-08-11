import { useState } from "react"

export const Colors = () => {
  const INTIAL_COLORS = ["EB5E55", "3A3335", "D81E5B", "FDF0D5", "C6D8D3"]
  const [colors, setColors] = useState(INTIAL_COLORS)
  const changeColors = (e) => {

    console.log("event: " + e)
    if (true) {
      const entery = "123456789ABCDEF"
      const generatedColors = []

      for (let i = 0; i < 5; i++) {
        let color = ""
        for (let j = 0; j < 6; j++) {
          color += entery[Math.floor(Math.random() * 15)]
        }
        generatedColors.push(color)
      }
      setColors(generatedColors)
    }

  }
  return (<div className="colors" onClick={(e) => changeColors(e)}>
    {colors.map(color => <p style={{ backgroundColor: `#${color}` }}>{`#${color}`}</p>)}
  </div>)


}