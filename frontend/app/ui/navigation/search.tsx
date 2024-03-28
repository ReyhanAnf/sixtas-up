import InputSearch from "./input";
import FilterSearch from "./filter-search";

export default function SearchPage() {
  return (
    <div className="w-full h-full px-8 rounded-2xl flex flex-col justify-start pt-5 bg-transparent text-white shadow-lg ">
      <InputSearch />
      <FilterSearch />
      <div>
        cari :
      </div>
    </div>
  );
}
