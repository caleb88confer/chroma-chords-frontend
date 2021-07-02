function ColorPalette ({handleSelect}) {
    return (
        <div>
                    <h1>Color Palette</h1>
        <section style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <div 
                style={{
                backgroundColor: "rgb(255, 0, 0)",
                height: 100,
                width: 100
                }}
                onClick={() => handleSelect("rgb(255, 0, 0)")}
            />
            <div 
                style={{
                backgroundColor: "rgb(0, 255, 0)",
                height: 100,
                width: 100
                }}
                onClick={() => handleSelect("rgb(0, 255, 0)")}
            />
            <div 
                style={{
                backgroundColor: "rgb(0, 0, 255)",
                height: 100,
                width: 100
                }}
                onClick={() => handleSelect("rgb(0, 0, 255)")}
            />
        </section>
        </div>

    )
}

export default ColorPalette;