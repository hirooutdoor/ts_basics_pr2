export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>Type Designation of Variables</p>
      <button onClick={onClickPractice}>Run Practice3</button>
    </div>
  );
};
