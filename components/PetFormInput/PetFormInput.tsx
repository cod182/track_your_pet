import Link from 'next/link';
import React from 'react';

declare interface petQuestionProps {
  required?: boolean;
  placeholder: string;
  setPet: any;
  pet: any;
  objectName: string; // e.g petName or petImage
  objectKeyOne: string; // E.G text or message
  objectKeyTwo: 'public'; // Always public
  infoMessage?: string; //Message displayed under
  infoLink?: string; // Link displayed under
}

const petFormInput = ({
  required,
  placeholder,
  setPet,
  pet,
  objectName,
  objectKeyOne,
  objectKeyTwo,
  infoMessage,
  infoLink,
}: petQuestionProps) => {
  const petValue = pet + `?.${objectName}?.` + { objectKeyOne };
  const publicValue = pet + `?.${objectName}?.` + { objectKeyTwo };
  const objectInsidePet = objectName;

  return (
    <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
        <input
          type="text"
          name={`${objectName}.${objectKeyOne}`}
          id={`${objectName}.${objectKeyOne}`}
          placeholder={placeholder}
          required={required ? true : false}
          className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded sm:mr-2 "
          onChange={(e) =>
            setPet({
              ...pet,
              objectInsidePet: {
                text: e.target.value,
                public: publicValue || false,
              },
            })
          }
        />
        <div className="flex flex-row justify-start w-full sm:w-fit">
          <input
            type="checkbox"
            name={`${objectName}.${objectKeyTwo}`}
            id={`${objectName}.${objectKeyTwo}`}
            onChange={(e) => {
              setPet({
                ...pet,
                objectInsidePet: {
                  text: petValue || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor={`${objectName}.${objectKeyTwo}`} className="ml-2">
            Public?
          </label>
        </div>
      </div>
      {infoMessage ? (
        <p className="text-xs text-gray-600 m-0 p-0 text-start">
          {infoMessage}
          {infoLink && (
            <Link
              className="decoration-dotted underline hover:decoration-double  hover:text-primary"
              target="_blank"
              href="https://what3words.com"
            >
              what3words.com
            </Link>
          )}
        </p>
      ) : null}
    </div>
  );
};

export default petFormInput;
