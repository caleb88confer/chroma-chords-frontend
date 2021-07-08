

function ColorPalette ({handleSelect, ChromaticScale}) {
    const notes = ChromaticScale.map((ele, idx) => {
        return (
            <div className="chromaticNotes"
                style={{
                backgroundColor: ele.color,
                height: "2.7rem",
                width: "2.7rem",
                margin: 5
                
                }}
                onClick={() => handleSelect(ele.color, ele.wavelength)}
                key={idx}
            />

        )

        
    })
    return (
        <div 
        className="chromaticPalette"
        >
                {notes}
        </div>

    )
}

export default ColorPalette;