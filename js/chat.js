// 点击清空聊天记录,并改名字
function tabChat(){
    $(".list-group-item").on("click",function(){
        $(".panel-heading").text($(this).text());
        $(".chat-content").children().remove();
    })
}
tabChat()

