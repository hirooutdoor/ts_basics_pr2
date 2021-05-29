export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice1 = () => calcTotalFee(1000);

  return (
    <div>
      <p>Type Designation of Arguments</p>
      <button onClick={onClickPractice1}>Run Practice1</button>
    </div>
  );
};
