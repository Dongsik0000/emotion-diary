import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

// 기준 날짜(pivotDate) 기준으로 해당 월의 일기 데이터만 필터링
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  );
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) =>
      beginTime.getTime() <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext); // 전체 일기 데이터
  const [pivotDate, setPivotDate] = useState(new Date()); // 현재 보고 있는 월
  usePageTitle("감정 일기장")

  const monthlyData = getMonthlyData(pivotDate, data); // 해당 월 일기만 추출

  // 다음 달로 이동
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  // 이전 달로 이동
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
