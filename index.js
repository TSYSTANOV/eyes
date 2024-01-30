let container = document.querySelector('.container')
let width = container.offsetWidth
let height = container.offsetHeight
let wrapHeight = document.querySelector('.wrap').offsetHeight
let wrapWidth = document.querySelector('.wrap').offsetWidth

let eyeWidth = document.querySelector('.eye').offsetWidth
let eyeHeight = document.querySelector('.eye').offsetHeight

let light = document.querySelector('.light')

let on = false
container.addEventListener('dblclick',()=>
{
   console.log(1)
    if(!on)
    {   
        document.querySelector('.monster').style.opacity = '1'
        container.style.background = "url('../images/Screenshot_2.jpg')"
        let left = event.pageX
        let top = event.pageY
        let x = left/window.innerWidth*100
        let y = top/window.innerHeight*100

        light.style.top = top- parseFloat(light.style.height) /2 + 'px'
        light.style.left = left - parseFloat(light.style.width) /2 + 'px'
        light.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 20px, rgba(0,0,0,1) 60px)`
        on = true
    }
    else
    {
        document.querySelector('.monster').style.opacity = '0'
        light.style.background = 'none'
        container.style.background = 'black'
        on = false
    }
})

container.addEventListener('mousemove',()=>
{
    let left = event.pageX
    let top = event.pageY
    let x = left/window.innerWidth*100
    let y = top/window.innerHeight*100

    if(on)
    {
    container.style.background = "url('../images/Screenshot_2.jpg')"
    light.style.top = top - parseFloat(light.style.height) /2 + 'px'
    light.style.left = left - parseFloat(light.style.width) /2 + 'px'
    light.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 20px, rgba(0,0,0,1) 60px)`
    }
  
   
 

    let eye = document.querySelectorAll('.eye')
    eye.forEach((el)=>
    {
        let w
        if((wrapWidth * left)/width < eyeWidth )
        {
            w = eyeWidth / 2 + 'px'
        }
        else if((wrapWidth * left)/width > wrapWidth - eyeWidth)
        {
            w = wrapWidth - eyeWidth/2 + 'px'
        }
        else
        {
            w = (wrapWidth * left)/width + 'px'
        }

        let h
        if((wrapHeight * top)/height < eyeHeight)
        {
            h = eyeHeight/2 + 'px'
        }
        else if((wrapHeight*top)/height > wrapHeight - eyeHeight)
        {
            h = wrapHeight - eyeHeight/2 + 'px'
        }
        else
        {
            h = (wrapHeight * top)/height + 'px'
        }


        el.style.top = h
        el.style.left = w
        // (wrapWidth * left)/width + 'px'
    })
})
