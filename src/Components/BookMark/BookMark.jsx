const BookMark = () => {
    const data = localStorage.getItem('bookmarked')
  return (
    <div className="my-10 md:w-[1300px] mx-auto">
      <div className="border border-black mb-6">
        <h3 className="text-xl md:text-2xl border-l-4 border-sky-300 px-3 py-3 font-semibold">
          Your Items
        </h3>
      </div>
      <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{data}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BookMark;
