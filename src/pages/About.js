function About (props) {
    return (
        <div className="aboutBody">
        <h1 className="aboutTitle">About Chroma Chords</h1>
        <div className="container">
        <hr></hr>
        </div>
        <div className="container">
            <h3 className="aboutSubHeading">Inspiration</h3>
            <p className="aboutParagraph">
                The idea for Chroma Chords was first sparked from a ted talk by Adam on polyrhythms. In the talk Adam explained how colors are light waves, and just like sound waves each color has its own frequency. Using a musical idea called octaves (the doubling or halving of a frequency is percieved as the same pitch) we can translate these incredibly was light frequencies down many octaves until they resemble sound frequencies.  
            </p>
            <a href="https://www.youtube.com/watch?v=JiNKlhspdKg">Link to Adam Neely's Ted Talk</a>
        </div>
        <div className="container">
        <hr></hr>
        </div>
        <div className="container">
            <h3 className="aboutSubHeading">Application</h3>
            <p className="aboutParagraph">
                Lots of math and logic had to go into making this app possible. The two primary conversions needed were turing the visable spectrum measured in Nanometers into Herz (a measuremnt of frequency), and converting Nanometers into a unit the computer can interpret into color, namely RGB units. The formula for determining light frequency is λν=c where λ(lamda) is the wavelength, ν(nu) is the frequency and c is the speed of light (roughly 300000000 meters/sec). Using this formula, and one of my own ν/2^43 I was able to determine the musical note of any color within the visable spectrum. I found the logic online used to convert wavelength to RGB at <a href="https://academo.org/demos/wavelength-to-colour-relationship/">academo.org</a> where the author of that article sites the work of <a href="http://www.midnightkite.com/color.html">Dan Bruton</a> in the making of that code. 
            </p>
        </div>
        <div className="container">
        <hr></hr>
        </div>
        <div className="container">
            <h3 className="aboutSubHeading">How to use</h3>
            <p className="aboutParagraph">
             Using Chroma Chords is an easy and explorative experience! Select a color from the top section of the app either using the chromatic palette(C button) or the spectrum slider(S button). Then click one of the voice pads to assign it the selected color, choose a new color and assign it to another voice pad. When your painting is done, press the play button to hear what your color choices sound like. Try out the onboard effects for some added flavor. When you are all done record your chord to the gallery for anyone to load up and experience. 
            </p>
        </div>
        

    </div>
    )
}

export default About;