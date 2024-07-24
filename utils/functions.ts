import { petOption, petProps } from "@/types";

export const fetchNotifications = async () => {
  try {
    const response = await fetch(`/api/petscans`, {
      method: 'GET',
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
}

export const updateNotifications = async (id: string) => {
  try {
    const response = await fetch(`/api/petscans/${id}`, {
      method: 'PATCH',
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
}

export const getPetOwnerId = async (petId: string) => {
  try {
    const response = await fetch(`/api/pet/${petId}`, {
      method: 'GET',
    });

    const responseData = await response.json();

    console.log('response of getting pet', response);

    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};

export const getPublicPetData = (petData: petProps): petProps => {
  // Create a new object to avoid mutating the original
  const newPetData: petProps = { ...petData };

  // Helper function to update fields based on 'public' property
  const checkPublic = (publicView: boolean, text: string) => {
    if (publicView) {
      return text;
    } else {
      return '';
    }
  }

  // type petProps = {



  //   petImage: petImage;








  //   contactNumber: petPhoneOption;
  //   contactEmail: petEmailOption;
  // };

  // Sanitize fields where applicable
  newPetData.petName = { public: petData.petName.public, text: checkPublic(petData.petName.public, petData.petName.text) }

  if (petData.dob) { newPetData.dob = { public: petData.dob.public, birthday: checkPublic(petData.dob.public, petData.dob.birthday) } }

  newPetData.breed = { public: petData.breed.public, text: checkPublic(petData.breed.public, petData.color.text) }

  newPetData.color = { public: petData.color.public, text: checkPublic(petData.color.public, petData.color.text) }

  if (petData.homeAddress) { newPetData.homeAddress = { public: petData.homeAddress.public, text: checkPublic(petData.homeAddress.public, petData.homeAddress.text) } }

  if (petData.what3words) { newPetData.what3words = { public: petData.what3words.public, w3w: checkPublic(petData.what3words.public, petData.what3words.w3w) } }

  if (petData.message) { newPetData.message = { public: petData.message.public, message: checkPublic(petData.message.public, petData.message.message) } }

  newPetData.contactNumber = { public: petData.contactNumber.public, phone: checkPublic(petData.contactNumber.public, petData.contactNumber.phone) }

  newPetData.contactEmail = { public: petData.contactEmail.public, email: checkPublic(petData.contactEmail.public, petData.contactEmail.email) }

  newPetData.ownerName = { public: petData.ownerName.public, text: checkPublic(petData.ownerName.public, petData.ownerName.text) }

  newPetData.petImage = petData.petImage
  newPetData.ownerId = petData.ownerId
  newPetData._id = petData._id;
  newPetData.petType = petData.petType;



  return newPetData;
}