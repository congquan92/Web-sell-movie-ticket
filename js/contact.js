function abc() {
  document.addEventListener("DOMContentLoaded", function () {
    const newclothes = document.querySelector(".newclothes");
    const addresses = document.querySelectorAll(".addr");
    const cities = document.querySelectorAll(".city");
    function fadeDown() {
      newclothes.classList.add("fadedown");
    }
    function fadeRight() {
      addresses.forEach((address) => {
        const rect = address.getBoundingClientRect(); // lay thong tin vi tri va kich thuoc cua phan tu
        if (rect.top < window.innerHeight) {
          address.classList.add("faderight");
        }
      });
    }
    function flipLeft() {
      cities.forEach((city) => {
        const rect = city.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setTimeout(() => {
            city.classList.add("flipleft");
          }, 100); // Thời gian chờ 100ms trước khi thêm lớp
        }
      });
    }

    window.addEventListener("scroll", fadeRight);
    window.addEventListener("scroll", flipLeft);
    fadeRight();
    flipLeft();
    fadeDown();
  });
}
abc();

function showNewStore() {
  loadpage();
  window.scrollTo(0, 0);
  document.querySelector(".contact_section").innerHTML = `
      <div class="new_store">
        <h1>NEWCLOTHES CHÍNH THỨC CÓ MẶT TẠI VINCOM MEGA MALL VINHOMES GRANDPARK, QUẬN 9</h1>
        <p>Đăng bởi: Newclothes</p>
        <p class="wrapper__store--body">
          Vào ngày 28.11.2024, địa điểm mua sắm mới của Newclothes sẽ chính thức chào sân tại Vincom Mega Mall Vinhomes Grand Park Quận 9, Thành phố Thủ Đức. <br>
          Với thiết kế mở và lối trang trí độc đáo, cửa hàng Newclothes mới hứa hẹn sẽ mang đến không gian mua sắm đầy ấn tượng cho các bạn trẻ Gen Z. Và tại đây, tất cả các sản phẩm nhà Newclothes sẽ được cập nhật đầy đủ và nhanh chóng cho khách hàng Thủ Đức có thể trực tiếp trải nghiệm và chọn lựa được những sản phẩm ưng ý nhất. <br>
          Để đánh dấu sự kiện đặc biệt này, Newclothes mang đến rất nhiều quà xịn cho các khách hàng đầu tiên đến với cửa hàng.
        </p>
          <div class="address_img">
            <img src="./img/1.1.jpg" alt="">
          </div>
        <p class="wrapper__store--body">  
          - Nhận ngay Tee (LEVENTS® SELFLOVE BOXY TEE) khi mua hóa đơn trị giá từ 899,000 VNĐ (70 đơn hàng đầu tiên) <br>
          - Nhận ngay Hoodie (LEVENTS® | DORAEMON COLLAB ZIPPER Hoodie) khi mua hóa đơn trị giá từ 2,399,000 VNĐ (10 đơn đầu tiên) <br>
          Chương trình chỉ được áp dụng tại Vincom Mega Mall Vinhomes Grand Park duy nhất từ 28.11.2024 đến 05.12.2024 và có thể kết thúc sớm hơn dự kiến khi số lượng quà tặng đã hết. <br>
          Địa chỉ: Tầng 2 TTTM Vincom Mega Mall Vinhomes Grand Park, Quận 9, Thành phố Thủ Đức <br>
          Hãy nhanh chân đến tham quan cửa hàng mới của Newclothes vào dịp khai trương này để không bỏ lỡ nhiều quà hot các bạn nhé!
        </p>

      </div>
  `;
}

function showEventAnniversary() {
  loadpage();
  window.scrollTo(0, 0);
  document.querySelector(".contact_section").innerHTML = `
      <div class="event">
        <h1 class="title">NEWCLOTHES 4TH ANNIVERSARY - 4 YEARS OF NEWCLOTHES LEGACY</h1>
        <p>Đăng bởi: Newclothes</p>
        <p class="wrapper__store--body">
          HAPPY NEWCLOTHES 4 YEARS ANNIVERSARY <br>
          Mở đầu năm 2024, đồng thời kỉ niệm hành trình 4 năm phát triển của Newclothes, Nhà niu chính thức mang đến bộ sưu tập đặc biệt không chỉ để ghi dấu cột mốc đầy ý nghĩa này mà còn là để tri ân khách hàng vì đã luôn đồng hành và ủng hộ Nhà Lì trong suốt 4 năm vừa qua!
        </p>
        <div class="event_img">
          <img src="./img/2.1.webp" alt="">
        </div>
        <p class="wrapper__store--body">
          Nhân dịp kỉ niệm 4 năm phát triển, Newclothes chính thức mang đến bộ sưu tập đặc biệt không chỉ để ghi dấu cột mốc đầy ý nghĩa này mà còn là để tri ân khách hàng vì đã luôn đồng hành và ủng hộ Nhà niu trong suốt 4 năm vừa qua <br>
          Danh mục sản phẩm 4 Years Anniversary: <br>
          Newclothes 4 Years Anniversary Hoodie <br>
          Newclothes 4 Years Anniversary Tee <br>
          Trong năm 2024 này, tụi mình sẽ tiếp tục mang đến thêm nhiều sản phẩm mới và không ngừng nâng cấp thiết kế và chất lượng sản phẩm để các bạn có thể tự tin thể hiện phong cách cá nhân, chất riêng của bản thân khi diện lên mình các sản phẩm đến từ Newclothes.
        </p>
        <div class="event_img">
          <img src="./img/2.2.webp" alt="">
        </div>
        <p class="wrapper__store--body">
          [GIVEAWAY] Newclothes 4 YEARS ANNIVERSARY
          Đánh dấu 4 năm hành trình phát triển đầy mạnh mẽ, Newclothes rất trân trọng và biết ơn sự yêu mến và ủng hộ của các bạn trong suốt thời gian qua. Để cảm ơn tình yêu thương to lớn này, Newclothes đã chuẩn bị các phần quà vô cùng giá trị dành tặng cho các bạn nèeeeee <br>
          + PHẦN THƯỞNG: <br>
          1. 2 (hai) giải nhất dành cho 2 bạn may mắn trị giá (+ ∞) vnd <br>
          2. 4 (bốn) giải nhì dành cho 4 bạn may mắn trị giá (+ ∞) vnd: <br>
          Dành cho tất cả những bạn yêu thích Newclothes
        </p>
        <div class="event_img">
          <img src="./img/2.3.webp" alt="">
        </div>
        <p class="wrapper__store--body">
          NEWCLOTHES 4TH ANNIVERSARY - 4 YEARS OF LEVENTS LEGACY <br>
          Một lần nữa, Newclothes xin chân thành cảm ơn tất cả các bạn đã đồng hành và ủng hộ dự án Newclothes 4TH ANNIVERSARY - 4 YEARS OF LEVENTS LEGACY.</p>
      </div>
  `;
}

function showTrendPedia() {
  loadpage();
  window.scrollTo(0, 0);
  document.querySelector(".contact_section").innerHTML = `
  <div class="trendpedia">
    <h1 class="title">[TRENDPEDIA] Y2K LÀ XU HƯỚNG GÌ MÀ LẠI LÀM KHUYNH ĐẢO GIỚI THỜI TRANG?</h1>
    <p>Đăng bởi: Newclothes</p>
    <p class="wrapper__store--body">
      Nếu hay thường xuyên theo dõi các video trên mạng xã hội của các bạn trẻ Âu Mỹ hay đặc biệt hơn là Hàn Quốc, Trung
      Quốc trên Tiktok hiệnnay, có thể bạn sẽ thấy khá nhiều hashtag #Y2K cùng phong cách thời trang khá mới lạ. Giống
      như phần lớn các xu hướng thời trang gần đây như normcore hay workwear, Y2K có thể được xem là một phong cách pha
      trộn cả mới lẫn cũ vì nó là sự xuất hiện "trở lại" của quần áo cũng như thiên hướng thẩm mỹ từ cuối những năm 90
      đầu 2000 và đang “hot” trở lại từ năm 2019. Vậy Y2K là gì? Hãy cùng DirtyCoins tìm hiểu về xu hướng này nha! <br> <br>
        1. Vậy xu hướng Y2K bắt đầu từ đâu? <br>
      Với các 9x đời đầu và thế hệ 8x, 7x... có lẽ cái tên Y2K thực sự rất quen thuộc. Nhưng có lẽ không có nhiều người
      biết rằng thuật ngữ này lại bắt nguồn từ một sự cố công nghệ diễn ra vào cuối những năm 1999; khi lập trình viên
      David Eddy tiên đoán trước một “thảm hoạ” công nghệ có thể xảy ra vào năm 2000 khi các máy tính gặp vấn đề trong
      việc đọc các dữ liệu liên quan tới thời gian do nhầm lẫn giữa năm 2000 và 1900; và đặt cho thảm hoạ đó cái tên
      ‘Y2K’.
    </p>
    <div class="trendpdia_img">
      <img src="./img/3.1.jpeg" alt="">
    </div>
    <p class="wrapper__store--body">
      Giờ đây, cái tên Y2K được sử dụng như một cụm từ mang tính chất khái quát những tư duy thẩm mĩ của giai đoạn
      chuyển giao của hai thiên niên kỉ. Đó cũng là thời kì giao thoa giữa sự bi quan về cảm giác của một ngày tận thế;
      xen lẫn với những niềm vui tươi mới của một kỉ nguyên thịnh vượng và phát triển kinh tế của phương Tây. Chủ nghĩa
      tiêu dung xa xỉ trở nên thịnh hành hơn; trang phục cũng phong phú về chất liệu, đặc biệt là những chi tiết trang
      trí lấp lánh và khối logo của các nhà thiết kế được in to và rõ, form váy áo bó sát. <br> <br>
        2. Tại sao Y2K "hot" trở lại? <br>
      Bản chất chu kỳ của xu hướng thời trang là một quá trình phục hưng cái cũ trong các thập niên trước và thay đổi
      sao cho hợp với thời đại. Xu hướng hoài cổ và tư duy thẩm mĩ hướng về những giá trị cũ đã mang trở lại những nguồn
      cảm hứng từ những thập niên 90 và 2000.
    </p>
    <div class="trendpdia_img">
      <img src="./img/3.2.jpeg" alt="">
    </div>
    <p class="wrapper__store--body">
      Một lý do sâu xa hơn có thể chính là vì chúng ta đang phải đối mặt với những áp lực tương tự với những năm 1990:
      những khủng hoảng toàn diện về xã hội khiến con người lo lắng về việc tích trữ thực phẩm, kinh tế và các giá trị
      sống để có thể tồn tại; cùng với việc phải phụ thuộc vào MXH để duy trì các tương tác xã hội. Màu sắc tươi sáng,
      trang trí kim tuyến lấp lánh, croptop bó sát, sự tích cực từ trang phục như "lá chắn"an toàn cho chúng ta khi phải
      đối mặt với thế giới hiện tại. <br>
      Hoặc trong một cái nhìn đơn giản hơn, những màu sắc và chi tiết này giúp ta cảm thấy bớt nhàm chán. Dù cho lý do
      có là gì đi chăng nữa thì phong cách Y2K đã trở lại một cách ngoạn mục cũng như xoá nhoà đi những ranh giới thời
      trang trong 2-3 năm gần đây. <br><br>
        3. Làm thế nào để có thể ứng dụng Y2K? <br>
      Thời trang Y2K có thể đến từ nhiều biểu tượng văn hóa đại chúng thường xuất hiện trong thời thơ ấu của Gen X, Gen
      Y. Búp bê Bratz (khá giống với búp bê Barbie) là nguồn cảm hứng thời trang lớn cho Y2K vì chúng luôn lấp lánh với
      màu chủ đạo là sắc hồng và tím.
    </p>
    <div class="trendpdia_img">
      <img src="./img/3.3.jpeg" alt="">
    </div>
    <p class="wrapper__store--body">
      Những bộ phim nổi tiếng của thời kì này như Mean Girls , Clueless và Legally Blonde cũng là nguồn cảm hứng đặc trưng
      cho phong cách này, vì sở hữu các nhân vật nữ chính sành điệu, yêu thích ăn diện một cách năng động. Một số thương
      hiệu xa xỉ đã từng rất thịnh hành vào những năm đầu 2000 như Dior, Gucci, Louis Vuitton, Alexander Wang,… và nhiều
      nhà mốt, bán lẻ khác cũng đang chạy theo xu hướng này. <br>
      Thêm vào đó, Y2K cũng được nhận diện bởi "Saddle Bag", một item gần như xuất hiện trong tất cả các bộ trang phục có
      gắn với từ khoá này, và hiện đang là một sản phẩm "hot" nhất trong nhiều bộ sưu tập của các nhà thiết kế từ
      Spring/Summer 2019. <br>
      Nếu muốn update phong cách của mình với phong cách Y2K vừa lạ vừa quen thì chắc chắn sản phẩm Baby T-Shirt (baby
      tee) mới ra của Newclothes sẽ là một lựa chọn base layer cực kì hoàn hảo cho các nàng nha!
    </p>
  </div>
  `;
}
