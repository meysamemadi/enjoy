import { Categories } from "./categories"
import { Cities } from "./cities"

export const Filters = () => {
  return (
    <div className="my-6 md:mt-[30px] lg:mt-[40px] flex flex-col gap-6">
        <Cities />
        <Categories />
    </div>
  )
}
