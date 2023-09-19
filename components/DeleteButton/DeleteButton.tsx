declare interface deleteProps {
  deleteFunc: () => {};
  buttonText: String;
  confirmButtonText: String;
}

const DeleteButton = ({
  deleteFunc,
  buttonText,
  confirmButtonText,
}: deleteProps) => {
  // Function to delete pet with confirmation
  const deleteClick = async (clickType: string) => {
    // Get the containers and buttons
    const deleteBtn: any = document.getElementById('delete-button');
    const deleteBtnText: any = document.getElementById('delete-button-text');
    const selectionContainer: any = document.getElementById(
      'selection-container'
    );
    const yesBtn: any = document.getElementById('yes-button');
    const noBtn: any = document.getElementById('no-button');
    const warningBox = document.getElementById('warning-box');

    //Check type
    if (clickType === 'cancel') {
      // reverting back to the standard delete button
      deleteBtnText.innerText = 'Delete';
      yesBtn.classList.add('hidden');
      noBtn.classList.add('hidden');
      deleteBtn.classList.remove('min-w-[200px]');
      deleteBtn?.removeAttribute('disabled', false);
      selectionContainer?.classList.remove('max-h-[100px]');
      selectionContainer?.classList.add('max-h-[0px]');
      warningBox?.classList.add('hidden');
    } else if (clickType === 'deleteCheck') {
      // add classed to reveal the confirmation buttons and change button text
      deleteBtnText.innerText = 'Are You Sure?';
      yesBtn.classList.remove('hidden');
      noBtn.classList.remove('hidden');
      deleteBtn.classList.add('min-w-[200px]');
      deleteBtn?.setAttribute('disabled', true);
      selectionContainer?.classList.add('max-h-[100px]');
      selectionContainer?.classList.remove('max-h-[0px]');
      warningBox?.classList.remove('hidden');
    } else if (clickType === 'deletePet') {
      // Deleting pet from db
      deleteFunc();
    }
  };

  return (
    <div className="my-2 h-fit w-fit flex flex-col justify-center items-center">
      <button
        id="delete-button"
        onClick={() => deleteClick('deleteCheck')}
        className="w-fit min-w-[100px] h-fit py-2 px-4 bg-gradient-to-tr to-red-200 from-red-400 hover:to-red-600 rounded-lg shadow-xl font-semibold text-white hover:text-black hover:shadow-inner transition-all ease-in duration-300"
      >
        <span id="delete-button-text">{buttonText}</span>
      </button>
      {/* Selection button container Delete / Cancel */}
      <div
        id="selection-container"
        className="bg-gray-300 w-fit h-fit overflow-hidden flex flex-row justify-between items-center transition-all duration-1000 ease-in rounded-b-md
          "
      >
        <button
          id="yes-button"
          className="hidden w-fit h-fit font-semibold text-md text-white hover:text-black p-2 m-2 rounded-md bg-red-600 hover:bg-red-400  hover:border-green-300"
          onClick={() => deleteClick('deletePet')}
        >
          {confirmButtonText}
        </button>
        <button
          id="no-button"
          className="hidden w-fit h-fit font-semibold text-md text-white hover:text-black p-2 m-2 rounded-md bg-cyan-600 hover:bg-cyan-400 hover:border-green-300"
          onClick={() => deleteClick('cancel')}
        >
          Cancel
        </button>
      </div>
      <div id="warning-box" className="hidden">
        <p className="text-sm text-center text-red-500 font-bold underline">
          * This is not reversible *
        </p>
      </div>
    </div>
  );
};

export default DeleteButton;
