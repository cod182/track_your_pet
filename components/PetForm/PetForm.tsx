import React from 'react';

declare interface PetFormProps {
  formType: 'Add' | 'Update';
  pet: any;
  setPet: any;
  submitting: any;
  handleSubmit: any;
}

const PetForm = ({
  formType,
  pet,
  setPet,
  submitting,
  handleSubmit,
}: PetFormProps) => {
  return (
    <div className="max-w-[800px] mx-auto w-full h-fit">
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        {/* Pet Image */}

        {/* Pet Name */}
        <div
          className="flex flex-row justify-evenly items-center w-full
            h-fit"
        >
          <input
            type="text"
            name="petName.text"
            id="petName.text"
            placeholder="Pet's Name"
            required
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                petName: {
                  text: e.target.value,
                  public: pet?.petName?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="petName.public"
            id="petName.public"
            onChange={(e) => {
              setPet({
                ...pet,
                petName: {
                  text: pet?.petName?.text || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="petName.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Pet D.O.B */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="dob.birthday"
            id="dob.birthday"
            placeholder="Pet's Date of Birth (Optional)"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                dob: {
                  text: e.target.value,
                  public: pet?.dob?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="dob.public"
            id="dob.public"
            onChange={(e) => {
              setPet({
                ...pet,
                dob: { text: pet?.dob?.text || '', public: e.target.checked },
              });
            }}
          />
          <label htmlFor="dob.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Pet Bred */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="breed.text"
            id="breed.text"
            placeholder="Breed"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                breed: {
                  text: e.target.value,
                  public: pet?.breed?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="breed.public"
            id="breed.public"
            onChange={(e) => {
              setPet({
                ...pet,
                breed: {
                  text: pet?.breed?.text || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="breed.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Pet Colour */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="color.text"
            id="color.text"
            placeholder="Colour"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                color: {
                  text: e.target.value,
                  public: pet?.color?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="color.public"
            id="color.public"
            onChange={(e) => {
              setPet({
                ...pet,
                color: {
                  text: pet?.color?.text || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="color.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Pet Home Address */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="homeAddress.text"
            id="homeAddress.text"
            placeholder="Pet's Home Address"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                homeAddress: {
                  text: e.target.value,
                  public: pet?.homeAddress?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="homeAddress.public"
            id="homeAddress.public"
            onChange={(e) => {
              setPet({
                ...pet,
                homeAddress: {
                  text: pet?.homeAddress?.text || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="homeAddress.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Pet What 3 Words */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="what3words.w3w"
            id="what3words.w3w"
            placeholder="What3Words location (Optional)"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                what3words: {
                  w3w: e.target.value,
                  public: pet?.what3words?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="what3words.public"
            id="what3words.public"
            onChange={(e) => {
              setPet({
                ...pet,
                what3words: {
                  w3w: pet?.what3words?.w3w || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="what3words.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Message */}
        <div className="flex flex-row justify-evenly items-center w-full h-fit">
          <input
            type="text"
            name="message.text"
            id="message.text"
            placeholder="Message displayed to people who scan your pet (Optional)"
            className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 my-4"
            onChange={(e) =>
              setPet({
                ...pet,
                message: {
                  text: e.target.value,
                  public: pet?.message?.public || false,
                },
              })
            }
          />
          <input
            type="checkbox"
            name="message.public"
            id="message.public"
            onChange={(e) => {
              setPet({
                ...pet,
                message: {
                  text: pet?.message?.text || '',
                  public: e.target.checked,
                },
              });
            }}
          />
          <label htmlFor="message.public" className="ml-2">
            Public?
          </label>
        </div>

        {/* Scan History */}
        <input
          type="hidden"
          name="scanHistory.dateTime"
          id="scanHistory.dateTime"
          value=""
        />
        <input
          type="hidden"
          name="scanHistory.coordinates"
          id="scanHistory.coordinates"
          value="0.00, 0.00"
        />
        <input
          type="hidden"
          name="scanHistory.message"
          id="scanHistory.message"
          value="Initial scan, pet created"
        />
        <input
          type="hidden"
          name="scanHistory.scannerName"
          id="scanHistory.scannerName"
          value="Pet created"
        />

        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          {submitting ? `${formType}ing your pet...` : `${formType} your pet`}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
