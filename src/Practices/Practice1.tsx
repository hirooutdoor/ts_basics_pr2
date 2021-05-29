export const Practice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>Type Designation of Arguments</p>
      <button onClick={onClickPractice}>Run Practice1</button>
    </div>
  );
};
