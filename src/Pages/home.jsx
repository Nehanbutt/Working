import '../Stylings/Buttons.css';

function Home() {
  const btnnames = [
    { name: 'Apple Watch' },
    { name: 'Pant' },
    { name: 'Pant' },
    { name: 'Pant' },
    { name: 'Perfume' },
  ];

  const actionButtons = [
    {
      id: 'deleteMostRecentButton',
      text: 'Delete Most Recent Item',
      bgColor: 'bg-red-500',
    },
    {
      id: 'proceedToPaymentButton',
      text: 'Proceed to Payment',
      bgColor: 'bg-green-500',
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mb-4 flex justify-center items-center gap-3">
          {btnnames.map((btn) => (
            <button className="bubbly-button" key={btn.name}>
              ADD {btn.name}
            </button>
          ))}
        </div>

        <div className="mb-4 flex flex-col gap-3 justify-center items-center">
          {actionButtons.map((actionBtn) => (
            <button
              id={actionBtn.id}
              className={`${actionBtn.bgColor} text-white py-2 px-4 rounded`}
              key={actionBtn.id}
            >
              {actionBtn.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;