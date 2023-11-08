const Menu = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article
            key={id}
            className="w-full mx-8 my-4 flex justify-start items-start"
          >
            <img
              className="w-72 h-48 mr-8 border-yellow-700 border-4 rounded-lg"
              src={img}
              alt={title}
            />
            <div className="w-96">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-2xl mr-16">{title}</p>
                <p className="text-yellow-700 font-bold">${price}</p>
              </div>
              <div className="w-full h-0.5 bg-slate-300"></div>
              <div className="my-8">
                <p className="text-md text-slate-500 font-semibold">{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
