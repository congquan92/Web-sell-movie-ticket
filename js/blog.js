let currentSlide = 0;
const slideInterval = 3000; // thoi gian chuyen slide (ms)
//Ham thay doi slide
function changeSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}
//ham hien thi slide hien tai
function showSlide(slideIndex) {
  const slides =
    document.querySelectorAll(
      ".carousel-item"
    ); /*lay tat ca cac phan tu co class la carousel*/

  if (slideIndex >= slides.length) {
    currentSlide = 0; // quay lai trang dau tien
  } else if (slideIndex < 0) {
    currentSlide = slides.length - 1; // quay lai trang cuoi cung
  } else {
    currentSlide = slideIndex;
  }
  const offset = currentSlide * 100; // tinh offset cho slide
  let carouselImages = document.getElementById("carouselImages");
  if (carouselImages != null) {
    carouselImages.style.transform = `translateX(-${offset}%)`; //thay doi giao dien slide
  }
}

//ham tu chuyen slide
setInterval(() => {
  changeSlide(1);
}, slideInterval);

function openTab(event, tabId) {
  //remove active class from all tabs buttons
  document.querySelectorAll(".tab-button").forEach(function (tabButton) {
    tabButton.classList.remove("active");
  });

  //Hide all tab contents
  document.querySelectorAll(".tab-content").forEach(function (tabContent) {
    tabContent.classList.remove("active");
  });

  //Show the clicked tab content
  document.getElementById(tabId).classList.add("active");

  //Add active class to the clicked tab button
  event.currentTarget.classList.add("active");
}

function viewDetails(blogId) {
  //Get the clicked blog item
  const blogItem = document.getElementById(blogId);
  const modalContent = document.getElementById("modalContent");
  const modal = document.getElementById("blogModal");

  // Lấy nội dung từ HTML
  const blogContent = document.getElementById(`content-${blogId}`); // Lấy nội dung từ blogItem
  if (blogContent) {
    // Kiểm tra nếu có nội dung
    modalContent.innerHTML = blogContent.innerHTML; // Set nội dung cho modal
    modal.style.display = "block"; // Hiển thị modal
  } else {
    modalContent.innerHTML = "<p>Nội dung chưa được cập nhật.</p>";
  }
  //reset modal   content scroll
  modal.scrollTop = 0;

  //hiện thị modal và thanh cuộn
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open"); // Ngăn cuộn
}
//close the modal when clicking the close button
function closeModal() {
  const modal = document.getElementById("blogModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

//close the modal when clicking outside the modal
window.onclick = function (event) {
  const modal = document.getElementById("blogModal");
  if (event.target === modal) {
    closeModal();
  }
};
