import "./Button.css";

// type에 따라 스타일이 달라지는 공통 버튼 컴포넌트 (DEFAULT / POSITIVE / NEGATIVE)
const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
