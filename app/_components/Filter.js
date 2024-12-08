"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  //for getting search params
  const searchParams = useSearchParams();
  //for replacing route we used useRoute
  const route = useRouter();
  //for getting current pathName
  const path = usePathname();

  //active filter
  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilters(filter) {
    //URLSearchParams used for setting "URL Query param internally";
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    route.replace(`${path}?${params?.toString()}`, { scrollL: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilters={handleFilters}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilters={handleFilters}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilters={handleFilters}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilters={handleFilters}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, activeFilter, handleFilters, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter && "bg-primary-700 text-primary-50"
      }`}
      onClick={() => handleFilters(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
