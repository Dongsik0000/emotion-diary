import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

// 선택 여부에 따라 하이라이트 클래스가 적용되는 감정 선택 아이템
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : "" // 선택된 감정만 색상 강조
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
