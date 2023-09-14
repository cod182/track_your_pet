declare interface selectSliderProps {
  leftSelect: string;
  rightSelect: string;
  setReturnState: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
const SelectSlider = ({
  leftSelect,
  rightSelect,
  setReturnState,
}: selectSliderProps) => {
  const changeSlider = () => {
    const slider = document.getElementById('slider');
    const onSelected = document.getElementById('true');
    const offSelected = document.getElementById('false');

    // Moving the slider to the right, this adds and removes classes for teh correct look
    const moveRight = () => {
      slider!.classList.remove('left-0');
      slider!.classList.add('left-[63px]');
      slider!.classList.add('rounded-r-2xl');
      slider!.classList.remove('rounded-l-2xl');
      slider!.classList.add('border-l-2');
      slider!.classList.remove('border-r-2');
      onSelected?.setAttribute('Checked', 'true');
      offSelected?.removeAttribute('Checked');
    };
    // Moving the slider to the left, this adds and removes classes for teh correct look
    const moveLeft = () => {
      slider!.classList.add('left-0');
      slider!.classList.remove('left-[63px]');
      slider!.classList.add('rounded-l-2xl');
      slider!.classList.remove('rounded-r-2xl');
      slider!.classList.add('border-r-2');
      slider!.classList.remove('border-l-2');
      offSelected?.setAttribute('Checked', 'true');
      onSelected?.removeAttribute('Checked');
    };
    if (offSelected?.attributes.getNamedItem('Checked')) {
      moveRight();
      setReturnState(true);
    } else {
      moveLeft();
      setReturnState(false);
    }
  };
  return (
    <div className=" rounded-2xl border-2 border-black flex flex-row items-center justify-evenly relative h-[50px] w-[130px] overflow-hidden transition-all duration-400 ease-in-out">
      <div
        id="slider"
        className="absolute w-[65px] h-[50px] bg-gray-300 top-0 left-0 rounded-l-2xl z-[999] transition-all duration-400 ease-in-out cursor-pointer border-r-2 border-black"
        onClick={() => changeSlider()}
      ></div>
      <div className="font-semibold relative h-full bg-green-300 w-[50%] flex flex-col justify-center items-center transition-all duration-400 ease-in-out">
        <input
          type="checkbox"
          name="locationChoice"
          id="true"
          className="rounded-full hidden"
          placeholder="True"
          value="true"
          required
          onChange={() => changeSlider()}
        />
        <label htmlFor="true">{leftSelect}</label>
      </div>
      <div className="font-semibold relative h-full bg-red-300 w-[50%] flex flex-col justify-center items-center transition-all duration-400 ease-in-out">
        <input
          checked
          required
          type="checkbox"
          name="locationChoice"
          id="false"
          className="rounded-full hidden"
          placeholder="false"
          value="false"
          onChange={() => changeSlider()}
        />
        <label htmlFor="false">{rightSelect}</label>
      </div>
    </div>
  );
};

export default SelectSlider;
