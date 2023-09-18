const RegistrationForm = () => {
  return (
    <form className="w-[90%] sm:w-full h-fit mx-auto">
      <input
        type="text"
        name="name"
        id="name"
        className="h-[50px] w-full border-black border-2 bg-gray-300 rounded-md my-2 py-2 px-4 text-[min(2vmin, 30px)]"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        className="h-[50px] w-full border-black border-2 bg-gray-300 rounded-md my-2 py-2 px-4 text-[min(2vmin, 30px)]"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        className="h-[50px] w-full border-black border-2 bg-gray-300 rounded-md my-2 py-2 px-4 text-[min(2vmin, 30px)]"
        placeholder="Password"
        required
      />
      <button
        type="submit"
        className="w-full h-fit py-2 px-4 bg-primary rounded-xl font-bold  mx-auto hover:bg-primaryLight transition-all duration-400 ease-in"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
