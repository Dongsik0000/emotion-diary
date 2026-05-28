// Date 객체를 "YYYY-MM-DD" 형식 문자열로 변환
export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`; // 한 자리 월 앞에 0 추가
  if (date < 10) date = `0${date}`; // 한 자리 일 앞에 0 추가

  return `${year}-${month}-${date}`;
};
