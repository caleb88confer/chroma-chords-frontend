import Square from "./Square";

function Voices ({color}) {
    return (
        <div>
<h1>Voices</h1>
<section
            style={{
                display: "flex",
                justifyContent: "center",
                margin: 10
            }}
        >
            <Square color={color}/>
            <Square color={color}/>
            <Square color={color}/>
  
        </section>


        </div>

    );
}
export default Voices;