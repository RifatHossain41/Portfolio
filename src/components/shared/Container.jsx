const Container = ({children}) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 pt-5 sm:px-2 px-4 bg-gray-400">
      {children}
    </div>
  );
};

export default Container;