import SearchPage from "../ui/navigation/search";
import ResSearch from "../ui/navigation/output-search";

export default function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  console.log(searchParams);

  return (
    <div className="w-full h-screen">
      <SearchPage />
      <ResSearch />
    </div>
  )
}