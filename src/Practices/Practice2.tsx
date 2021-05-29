export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => console.log(getTotalFee(1000));

  return (
    <div>
      <p>Type Designation of Retuned value</p>
      <button onClick={onClickPractice}>Run Practice2</button>
    </div>
  );
};
