$(".navRight>ul li").on("mouseenter", function () {
    var n = this.offsetLeft;
    $(this).children("ul").css({
        "z-index": "101",
        "display": "block",
        left: n,
        top:70,
        "listStyle": "none",
        "backgroundColor": "skyblue"
    })
    
})
$(".navRight>ul li").on("mouseleave", function () {
    $(this).children("ul").css({
        "z-index": "-99",
        display: "none",
        "backgroundColor": "skyblue"
    })
})

$("#index-logo").on("click",function(){
    $(".butterfly_container").toggleClass("butterfly_exist");
    return false;
})
