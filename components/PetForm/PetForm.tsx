import Link from 'next/link';
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
      <div className="flex flex-col justify-center items-center mt-4 mb-1">
        <h1 className="text-3xl text-center text-transparent bg-clip-text bg-gradient-to-bl from-primary to-cyan-400">
          {formType} your pet
        </h1>
        <p className="text-sm mt-2 w-full sm:max-w-[80%]">
          Fill out your pets details below and add them to your account. A QR
          code will be generated and displayed on the pet's profile page.
        </p>
      </div>

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
        <div className="flex flex-col justify-center w-full h-fit my-4">
          <div className="flex flex-row justify-evenly items-center w-full h-fit">
            <input
              type="text"
              name="what3words.w3w"
              id="what3words.w3w"
              placeholder="What3Words location (Optional)"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 "
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
          <div className="flex flex-row justify-start items-center">
            <p className="text-xs text-gray-600 m-0 p-0 text-start">
              * To get your what3words address, please head to&nbsp;
              <Link
                className="decoration-dotted underline hover:decoration-double  hover:text-primary"
                target="_blank"
                href="https://what3words.com"
              >
                what3words.com
              </Link>
            </p>
          </div>
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
          className="px-5 py-1.5 text-sm bg-primary rounded-xl text-white"
        >
          {submitting ? `${formType}ing your pet...` : `${formType} your pet`}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
