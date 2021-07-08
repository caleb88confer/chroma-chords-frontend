

function ColorPalette ({handleSelect, ChromaticScale}) {
    const notes = ChromaticScale.map((ele, idx) => {
        return (
            <div className="chromaticNotes"
                style={{
                backgroundColor: ele.color,
                
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