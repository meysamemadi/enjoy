import { CityItem } from "./city-item";

export const Cities = () => {
  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6">
      <CityItem id={1} name="tehran" />
      <CityItem id={1} name="esfehan" />
      <CityItem id={1} name="rasht" active />
      <CityItem id={1} name="shiraz" />
      <CityItem id={1} name="ahvaz" />
      <CityItem id={1} name="other" />
    </div>
  );
}
