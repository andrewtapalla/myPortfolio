const React = require('react')
const Def = require('./default')

// HOME PAGE
function home () {
    return (
        <Def>
            <body>
            <div class="container" />
                <div class="jumbotron jumbotron-fluid" />
                    <div class="container">
                        <center> 
                            <h1 class="display-4">Andrew Tapalla</h1>
                            <h4>Junior Software Developer • Full-Stack Developer</h4>
                        </center>
                    </div>
                    <div class="about-me-container" />
                    <section class="paragraph-me" />
                        <center>
                            <img src="/images/alternatepicture.jpg" class="profilePicture" />
                        </center>                    
                        <br />
                        <br />
                        <p class="containerParagraph">
                             I come from a background with little to no knowledge of coding. Throughout college, I prepared myself for a career in law enforcement. From 2017 - 2021, I served my community within that career field and worked as a Corrections Officer for Washington State Department of Corrections and Nevada Department of Corrections.
                        </p>
                        <p class="containerParagraph">
                            I decided for a career change due to my strong desire to mentally challenge myself. I quickly fell in love with the gratification I feel after having a code work. So shortly after, I enrolled myself in the University of Nevada, Las Vegas (UNLV) Full-Stack Development Bootcamp course in October 2021.
                        </p>
                        <p class="containerParagraph">
                            I am still currently enrolled in their program and I am due to complete the program in June 2022.</p>
                        <p />
                    <section />
                <div />
                <hr />
                <center>© Andrew Tapalla, 2021</center>
            </body>
        </Def>
    )
}
module.exports = home