import Link from 'next/link';
import React from 'react';
import { TitleComp } from '@/components';

import FadeIn from 'react-fade-in';
import PetFormImageSelect from '../PetFormImageSelect/PetFormImageSelect';

import { petImageOptions } from '../../constants/petImageOptions';

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
    <FadeIn
      delay={100}
      transitionDuration={600}
      className="max-w-[800px] mx-auto w-full h-fit"
    >
      {/* Title */}
      <div className="flex flex-col justify-center items-center mt-4 mb-1">
        <TitleComp
          position="center"
          size="calc(20px + 2.5vmin)"
          extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
          title={`${formType} your pet`}
        />
        <p className="text-sm mt-2 w-full sm:max-w-[80%] text-gray-600">
          Fill out your pets details below to add them to your account. A QR
          code will be generated and displayed on the pet's profile page.
        </p>
      </div>

      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        {/* Pet Image / Type */}
        <PetFormImageSelect
          pet={pet}
          setPet={setPet}
          imageOptions={petImageOptions}
        />

        {/* Pet Name */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              type="text"
              name="petName.text"
              id="petName.text"
              placeholder="Pet's Name"
              required
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded sm:mr-2 "
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
        </div>

        {/* Pet D.O.B */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              type="text"
              name="dob.birthday"
              id="dob.birthday"
              placeholder="Pet's Date of Birth (Optional)"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 "
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
              <input
                type="checkbox"
                name="dob.public"
                id="dob.public"
                onChange={(e) => {
                  setPet({
                    ...pet,
                    dob: {
                      text: pet?.dob?.text || '',
                      public: e.target.checked,
                    },
                  });
                }}
              />
              <label htmlFor="dob.public" className="ml-2">
                Public?
              </label>
            </div>
          </div>
        </div>

        {/* Pet Breed */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              required
              type="text"
              name="breed.text"
              id="breed.text"
              placeholder="Breed"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 "
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
        </div>

        {/* Pet Colour */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              required
              type="text"
              name="color.text"
              id="color.text"
              placeholder="Colour"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2"
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
        </div>

        {/* Pet Home Address */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              type="text"
              name="homeAddress.text"
              id="homeAddress.text"
              placeholder="Pet's Home Address"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2"
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
        </div>

        {/* Pet What 3 Words */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
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

            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
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

        {/* Message */}
        <div className="flex flex-col justify-evenly w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit">
            <input
              type="text"
              name="message.text"
              id="message.text"
              placeholder="Message displayed to people who scan your pet (Optional)"
              className="w-full h-[40px] px-4 py-2 bg-gray-200 border-primary border-2 rounded mr-2 "
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
            <div className="flex flex-row justify-start w-full sm:w-fit">
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
          </div>
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
          className="px-5 py-2 bg-primary hover:bg-primaryLight focus:bg-blue-600 text-lg rounded-xl text-white w-full sm:w-fit my-4"
        >
          {submitting ? `${formType}ing your pet...` : `${formType} your pet`}
        </button>
      </form>
    </FadeIn>
  );
};

export default PetForm;
