$(document).ready(function(){
    $('#donggyu').fullpage({
        anchors : ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function(anchorLink, index){
            
            console.log(index)
            if(index==1){
                $('header .inner ul').removeClass('on')
                $('header .inner .gotop').removeClass('two')
                $('header .inner .gotop').removeClass('three')
                $('header .inner .gotop').removeClass('four')
            }
            if(index>=2){
                $('header .inner ul').addClass('on')
            }
            if(index==2){
                $('header .inner .gotop').removeClass('three')
                $('header .inner .gotop').removeClass('four')
                $('header .inner .gotop').addClass('two')
            }
            if(index==3){
                $('header .inner .gotop').removeClass('two')
                $('header .inner .gotop').removeClass('four')
                $('header .inner .gotop').addClass('three')
            }
            if(index==4){
                $('header .inner .gotop').removeClass('three')
                $('header .inner .gotop').removeClass('two')
                $('header .inner .gotop').addClass('four')
            }
        }

    });
    
    $('.gallery-header .mo, .ef').click(function(){
        $('.gallery-header .mo, .ef').closest('div').css('color', 'white')
        $(this).css('color', '#3AC6FF')
    })

    $('.mo').click(function(){
        $('.editbox').hide()
        $('.motion').show()
        $('.gallery-header .check').removeClass('on')
    })
    $('.ef').click(function(){
        $('.motion').hide()
        $('.editbox').show()
        $('.gallery-header .check').addClass('on')
    })
})


const items = document.querySelectorAll('.gallery-collection li')
const close = document.querySelector('.popup button')
const popup = document.querySelector('.popup')

items.forEach((el)=>{
    el.addEventListener('mouseenter', ()=>{
        el.querySelector('video').play()
    })
    el.onmouseleave = ()=> {
        
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = '0'
    }
    el.addEventListener('click', (e)=>{
        let title = el.querySelector('.title').innerText
        // let text = el.querySelector('img').innerText
        let videosrc = e.currentTarget.querySelector('video').
        getAttribute('src')
        let imagesrc1 = e.currentTarget.querySelector('img:nth-child(1)').
        getAttribute('src')
        let imagesrc2 = e.currentTarget.querySelector('img:nth-child(2)').
        getAttribute('src')
        let imagesrc3 = e.currentTarget.querySelector('img:nth-child(3)').
        getAttribute('src')

        popup.querySelector('.txt .title').innerText = title
        popup.querySelector('video').setAttribute('src', videosrc)
        popup.querySelector('.txt img:nth-child(1)').setAttribute('src', imagesrc1)
        popup.querySelector('.txt img:nth-child(2)').setAttribute('src', imagesrc2)
        popup.querySelector('.txt img:nth-child(3)').setAttribute('src', imagesrc3)
        popup.classList.add('on')
        popup.querySelector('video').play()
    })
})

close.addEventListener('click', ()=>{
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})

const twoitems = document.querySelectorAll('#donggyu .inter')
const twoclose = document.querySelector('.twopopup button')
const twopopup = document.querySelector('.twopopup')

twoitems.forEach((el)=>{
    el.onmouseleave = ()=> {
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = '0'
    }

    el.addEventListener('click', (e)=>{
        let twovideosrc = e.currentTarget.querySelector('video').
        getAttribute('src')

        twopopup.querySelector('video').setAttribute('src', twovideosrc)
        twopopup.classList.add('on')
        twopopup.querySelector('video').play()
    })
})

twoclose.addEventListener('click', ()=>{
    twopopup.classList.remove('on')
    twopopup.querySelector('video').pause()
})

