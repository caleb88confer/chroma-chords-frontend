

function ColorPalette ({handleSelect, ChromaticScale}) {
    const notes = ChromaticScale.map((ele, idx) => {
        return (
            <div 
                style={{
                backgroundColor: ele.color,
                height: 35,
                width: 35,
                margin: 5
                
                }}
                onClick={() => handleSelect(ele.color, ele.wavelength)}
                key={idx}
            />

        )

        
    })
    return (
        <div>
                    <h1>Color Palette</h1>
        <section style={{
            display: "flex",
            justifyContent: "center",
        }}>
                {notes}
        </section>
        </div>

    )
}

export default ColorPalette;