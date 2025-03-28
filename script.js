document.addEventListener("DOMContentLoaded", function () {
    const bloggerURL = "https://ngontinhnhieunguoixem.blogspot.com/feeds/posts/default?alt=json";
    const proxyURL = "https://api.allorigins.win/get?url=" + encodeURIComponent(bloggerURL);

    fetch(proxyURL)
        .then(response => response.json())
        .then(data => {
            let jsonData = JSON.parse(data.contents); // Lấy nội dung JSON thực từ Blogger
            let posts = jsonData.feed.entry;
            let danhSachTruyen = document.getElementById("danh-sach-truyen");
            danhSachTruyen.innerHTML = ""; // Xóa nội dung cũ

            posts.forEach(post => {
                let title = post.title.$t;
                let link = post.link.find(l => l.rel === "alternate").href;

                let truyenHTML = `<li><a href="${link}" target="_blank">${title}</a></li>`;
                danhSachTruyen.innerHTML += truyenHTML;
            });
        })
        .catch(error => console.error("❌ Lỗi khi lấy dữ liệu:", error));
});

