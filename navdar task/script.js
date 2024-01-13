"use strict"

let div1=document.createElement('div')
div1.className="container"

let div2= document.createElement('div')
div2.className="main"


let h3=document.createElement('h3')
h3.innerText="Page Not Fount" 


let p = document.createElement('p')
p.className="para"
p.innerText = "Looks like you've followed a broken link or entered a URL that doesn't exit on this site"



let span = document.createElement('a')
span .className='span'
span .innerText="< Back to or site"
span.setAttribute("href","index.html")

let hr = document.createElement('hr')
hr .className='line'


let p1 = document.createElement('p')
p1.className="para1"
p1.innerText = "if this is your site and you weren't expecting a 404 for this path,please visit nestify's page not found support guide for troubleshooting tips. "


div2.append(h3,p,span,hr,p1)
document.body.append(div2);
div1.append(div2)
document.body.append(div1)

