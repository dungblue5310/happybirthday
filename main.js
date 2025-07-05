// Thay đổi nội dung búc thư ở đây
var letterContent =" hí lô chị Minh châu , hôm nay là 1 ngày khá đặc biệt haa , ngày mà một thiên thần,một bông hoa ra đời, ngày mà chị Minh châu chào đón ánh bình minh ở thế giới này , nay ngày 06/07 , số khá đẹp ha , nhân ngày sinh nhật , em momg rằng chị luôn hạnh phúc , luôn gặp nhiều may mắn và những niềm vui , gặp gỡ và giao lưu nhiều điều hay ho , mong chị luôn giữ nụ cười , dù gặp nhau chưa được lâu lắm , nhưng gặp được chị em cảm thấy rất vui , như có thêm 1 người bên cạnh buồn vui với em vậy , thoi thì chúc chị tất cả trừ vất vả , luôn gặt hái được nhiều thành công ,mong rằng chị luôn giữ nụ cười trên đôi môi xing xẻo nhiaa , hẹn 1 ngày gần nhất em và chị sẽ gặp nhau , yea have a nice day bbe"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
