const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places/aboutme">About Me</a>
                    </li>
                    <li>
                        <a href="/places/education">Education</a>
                    </li>
                    <li>
                        <a href="/places/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/places/contact">Contact</a>
                    </li>
                    <li class="page-header"></li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrewtapalla/" target="_blank">
                        <img src="/images/linkedin.png" height="25" width="25"></img>
                        </a>
                    </li>
                    <li>
                        <img src="/images/email.png" height="25" width="25"></img>
                    </li>
                    <li>
                        <a href="https://github.com/andrewtapalla" target="_blank">
                         <img src="images/github.png" height="25" width="25"></img>   
                        </a>
                    </li>
                </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def