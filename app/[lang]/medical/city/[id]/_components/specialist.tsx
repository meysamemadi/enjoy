import Title from "@/app/[lang]/components/title";
import CategoryItem from "./category-item";
import DoctorItem from "./doctor-item";

const Specialist = () => {
    return (
      <div className="container mt-6 md:mt-[44px] lg:mt-[64px]">
        <Title className="mb-6 md:mb-8 lg:mb-[40px]" title="our specialists" />
        <div className="flex flex-wrap gap-[8px] md:gap-[16px] lg:gap-[24px]">
          <CategoryItem id="0" title="all" />
          <CategoryItem active id="0" title="Plastic surgery" />
          <CategoryItem id="0" title="Hair loss treatment" />
          <CategoryItem
            id="0"
            title="Non surgical
treatments"
          />
          <CategoryItem id="0" title="Body contouring" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-6 md:py-[40px]">
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
          <DoctorItem
            id="1"
            fullname="Dianne Russell"
            special="Family Nurse Practitioner"
            image="sssss"
          />
        </div>
      </div>
    );
}
 
export default Specialist;