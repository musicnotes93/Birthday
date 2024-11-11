
$("button").on("click", () => {
    $('.balloons').fadeIn(3000);
    setTimeout(() => {
        $(".flexTitle").hide();
        $(".photoContainer").show();
        $('.balloons').fadeOut(2000);
    }, 3000)
})

$(".fionaPhoto").on("click", () => {
    $(".fionaText").toggleClass("show");
    $(".fionaPhoto").toggleClass("zoom");
})

$(".yoshiPhoto").on("click", () => {
    $(".yoshiText").toggleClass("show");
    $(".yoshiPhoto").toggleClass("zoom");
})

$(".banjoPhoto").on("click", () => {
    $(".banjoText").toggleClass("show");
    $(".banjoPhoto").toggleClass("zoom");
})