document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter button"); // Lấy tất cả nút thể loại
    const stories = document.querySelectorAll(".truyen"); // Lấy tất cả truyện

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.textContent.trim(); // Lấy thể loại từ nút bấm

            stories.forEach(story => {
                if (story.getAttribute("data-theloai").includes(category)) {
                    story.style.display = "block"; // Hiện truyện đúng thể loại
                } else {
                    story.style.display = "none"; // Ẩn truyện khác
                }
            });
        });
    });
});
