document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ngontinhnhieunguoixem.blogspot.com/feeds/posts/default?alt=json")
        .then(response => response.json())
        .then(data => {
            let posts = data.feed.entry;
            let grid = document.getElementById("danh-sach-truyen");
            grid.innerHTML = ""; // Xóa nội dung cũ

            posts.forEach(post => {
                let title = post.title.$t;
                let link = post.link.find(l => l.rel === "alternate").href;

                // Lấy thể loại từ nhãn (category) trong Blogger
                let categories = post.category ? post.category.map(cat => cat.term) : ["Chưa rõ"];
                let theloai = categories[0]; // Chọn thể loại đầu tiên

                // Tạo HTML hiển thị truyện
                let truyenHTML = `
                    <div class="truyen" data-theloai="${theloai}">
                        <a href="${link}" target="_blank">${title}</a>
                    </div>
                `;
                grid.innerHTML += truyenHTML;
            });

            // Gọi hàm để đánh số thứ tự sau khi tải xong truyện
            danhSoThuTu();
        })
        .catch(error => console.error("Lỗi khi lấy dữ liệu:", error));

    // Tính năng lọc truyện theo thể loại
    const buttons = document.querySelectorAll(".filter button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.textContent.trim();
            document.querySelectorAll(".truyen").forEach(story => {
                if (story.getAttribute("data-theloai").includes(category) || category === "Tất Cả") {
                    story.style.display = "block";
                } else {
                    story.style.display = "none";
                }
            });
        });
    });

    // Hàm đánh số thứ tự theo thể loại
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
});

