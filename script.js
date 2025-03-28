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
function danhSoThuTu() {
    let danhSachTruyen = document.querySelectorAll(".truyen");

    let soThuTu = {}; // Lưu số thứ tự theo thể loại

    danhSachTruyen.forEach(truyen => {
        let theLoai = truyen.getAttribute("data-theloai");
        if (!soThuTu[theLoai]) {
            soThuTu[theLoai] = 1; // Bắt đầu từ số 1
        } else {
            soThuTu[theLoai]++; // Tăng số thứ tự
        }
        truyen.innerText = `${soThuTu[theLoai]}. ${truyen.innerText.split(". ")[1] || truyen.innerText}`;
    });
}

// Gọi hàm sau khi nội dung đã tải xong
document.addEventListener("DOMContentLoaded", danhSoThuTu);
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".dang-truyen-btn");
    if (btn) {
        btn.addEventListener("click", function () {
            window.location.href = "dangtruyen.html";
        });
    } else {
        console.error("Không tìm thấy phần tử .dang-truyen-btn");
    }
});
