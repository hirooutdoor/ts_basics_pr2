export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>Play around on TS Config</p>
      <button onClick={onClickPractice}>Run Practice4</button>
    </div>
  );
};
