// 로고 버튼 요소 선택
const logoBtn = document.getElementById('logoBtn');

// 로고 버튼 클릭 시 다음 페이지로 이동하는 이벤트 리스너 추가
logoBtn.addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작(링크 이동) 방지
  window.location.href = 'next_page.html'; // 다음 페이지로 이동
});
 // 로고 이미지 요소 선택
const logoImg = document.getElementById('logoImg');

// 마우스 커서가 이미지 위에 올라갔을 때 이벤트 리스너 추가
logoImg.addEventListener('mouseover', function() {
// 마우스 커서가 이미지 위에 올라갔을 때 이미지 변경
this.src = '나이키(검).png'; // 새로운 로고 이미지 경로
// 배경 비디오 숨기기
 document.getElementById('video-container').style.display = 'none';
 });

// 마우스 커서가 이미지 위에서 벗어났을 때 이벤트 리스너 추가
logoImg.addEventListener('mouseout', function() {
// 마우스 커서가 이미지 위에서 벗어났을 때 이미지 원래대로 변경
this.src = '나이키(흰).png'; // 원래 로고 이미지 경로
// 배경 비디오 보이기
document.getElementById('video-container').style.display = 'block';
}); 