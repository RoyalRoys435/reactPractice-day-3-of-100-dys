function NavBar(){
    return(
        <header>
        <nav className="NavBar">
            <ol>
                <li>
                    React
                </li>
            </ol>
            <ul>
                
                <li>React-practice day 3</li>
            </ul>
        </nav>
    </header>
    )
 
}
function Main(){
    return(
        <div className="Main">
        <h1 >Hello React</h1>
        <h2>Am glad am learning to code in react and here are my reasons why</h2>
        <ul>
            <li>its fun</li>
            <li>somewhat easy compared to other languages</li>
            <li>its easy to get hired when you posses the skills</li>
            <li>am a front end developer</li>
        </ul>
        </div> 
    )
}
function Footer(){
    return(
        
            
                <footer>
                    <small>
                        developed by royalroys
                    </small>
                </footer>
    )   
    
}
function Page(){
    return(

        <div>
            <NavBar />
          
            <Main /> 
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))