

// ȥ��bannerͼ
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}



// ����
fish();
function fish() {
    return (
        $("#footer-wrap").css({
            position: "absolute",
            "text-align": "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        }),
        $("footer").append(
            '<div class="container" id="jsi-flying-fish-container"></div>'
        ),
        $("body").append(
            '<script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
        ),
        this
    );
}